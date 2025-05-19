import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">CreditEase</a>
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link" routerLink="/clients">Clients</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/credits">Crédits</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/repayments">Remboursements</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
