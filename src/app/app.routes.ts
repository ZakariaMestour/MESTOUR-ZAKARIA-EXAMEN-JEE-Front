import { Routes } from '@angular/router';
import {ClientListComponent} from './clients/client-list/client-list.component';
import {ClientFormComponent} from './clients/client-form/client-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
   { path: 'clients/create', component: ClientFormComponent },
  // { path: 'credits', component: CreditListComponent },
  // { path: 'repayments', component: RepaymentListComponent },
];
