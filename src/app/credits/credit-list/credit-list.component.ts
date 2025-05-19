import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditService, CreditDTO } from '../credit.service';

@Component({
  selector: 'credit-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Liste des crédits</h2>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let credit of credits">
        Crédit #{{ credit.id }} - {{ credit.amount }} DH (Client ID: {{ credit.clientId }})
      </li>
    </ul>
  `
})
export class CreditListComponent {
  private service = inject(CreditService);
  credits: CreditDTO[] = [];

  ngOnInit() {
    this.service.getAll().subscribe(data => (this.credits = data));
  }
}
