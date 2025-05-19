import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RepaymentService, RepaymentDTO } from '../repayment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'repayment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Ajouter un remboursement</h2>
    <form (ngSubmit)="save()">
      <div class="mb-3">
        <label class="form-label">ID du crédit</label>
        <input type="number" class="form-control" [(ngModel)]="repayment.creditId" name="creditId" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Montant</label>
        <input type="number" class="form-control" [(ngModel)]="repayment.amount" name="amount" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Date</label>
        <input type="date" class="form-control" [(ngModel)]="repayment.date" name="date" required>
      </div>
      <button type="submit" class="btn btn-success">Enregistrer</button>
      <button type="button" class="btn btn-secondary ms-2" (click)="cancel()">Annuler</button>
    </form>
  `
})
export class RepaymentFormComponent {
  repayment: RepaymentDTO = { creditId: 0, amount: 0, date: '' };
  private service = inject(RepaymentService);
  private router = inject(Router);

  save() {
    this.service.create(this.repayment).subscribe(() => {
      this.router.navigate(['/repayments']);
    });
  }

  cancel() {
    this.router.navigate(['/repayments']);
  }
}
