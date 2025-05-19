import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepaymentService, RepaymentDTO } from '../repayment.service';

@Component({
  selector: 'repayment-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Remboursements</h2>
    <table class="table table-striped">
      <thead>
        <tr><th>ID</th><th>Crédit ID</th><th>Montant</th><th>Date</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of repayments">
          <td>{{ r.id }}</td>
          <td>{{ r.creditId }}</td>
          <td>{{ r.amount }}</td>
          <td>{{ r.date | date:'shortDate' }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class RepaymentListComponent implements OnInit {
  repayments: RepaymentDTO[] = [];
  private service = inject(RepaymentService);

  ngOnInit() {
    this.service.getAll().subscribe(data => this.repayments = data);
  }
}
