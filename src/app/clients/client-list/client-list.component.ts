import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService, ClientDTO } from '../client.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'client-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mt-5">

      <h2 >Liste des Clients</h2>
      <button class="btn btn-primary mb-3" (click)="goToCreate()">
        + Nouveau client
      </button>
      <table class="table table-striped">
        <thead>
        <tr><th>ID</th><th>Nom</th><th>Email</th></tr>
        </thead>
        <tbody>
        <tr *ngFor="let c of clients">
          <td>{{ c.id }}</td>
          <td>{{ c.name }}</td>
          <td>{{ c.email }}</td>
        </tr>
        </tbody>
      </table>

    </div>

  `
})
export class ClientListComponent implements OnInit {
  clients: ClientDTO[] = [];
  private clientService = inject(ClientService);
  private router = inject(Router);

  ngOnInit() {
    this.clientService.getAll().subscribe(data => (this.clients = data));
  }

  goToCreate() {
    this.router.navigate(['/clients/create']);
  }
}
