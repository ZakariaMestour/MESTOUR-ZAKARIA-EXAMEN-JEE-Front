import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService, ClientDTO } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'client-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Créer un client</h2>
    <form (ngSubmit)="save()">
      <div class="mb-3">
        <label class="form-label">Nom</label>
        <input
          class="form-control"
          name="name"
          [(ngModel)]="client.name"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          [(ngModel)]="client.email"
          required
        />
      </div>
      <button type="submit" class="btn btn-success">Enregistrer</button>
      <button type="button" class="btn btn-secondary ms-2" (click)="cancel()">
        Annuler
      </button>
    </form>
  `
})
export class ClientFormComponent {
  client: ClientDTO = { name: '', email: '' };
  private service = inject(ClientService);
  private router = inject(Router);

  save() {
    this.service.create(this.client).subscribe({
      next: () => this.router.navigate(['/clients']),
      error: err => console.error(err)
    });
  }

  cancel() {
    this.router.navigate(['/clients']);
  }
}
