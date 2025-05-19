import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditService, CreditDTO } from '../credit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'credit-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Créer un crédit</h2>
    <form (ngSubmit)="save()">
      <div class="mb-3">
        <label class="form-label">Montant</label>
        <input
          class="form-control"
          type="number"
          [(ngModel)]="credit.amount"
          name="amount"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">ID Client</label>
        <input
          class="form-control"
          type="number"
          [(ngModel)]="credit.clientId"
          name="clientId"
          required
        />
      </div>
      <button class="btn btn-success" type="submit">Enregistrer</button>
      <button class="btn btn-secondary ms-2" type="button" (click)="cancel()">Annuler</button>
    </form>
  `
})
export class CreditFormComponent {
  credit: CreditDTO = { amount: 0, clientId: 0 };
  private service = inject(CreditService);
  private router = inject(Router);

  save() {
    this.service.create(this.credit).subscribe(() => {
      this.router.navigate(['/credits']);
    });
  }

  cancel() {
    this.router.navigate(['/credits']);
  }
}
