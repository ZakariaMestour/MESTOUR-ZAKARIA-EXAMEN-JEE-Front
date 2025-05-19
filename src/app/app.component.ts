import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <navbar></navbar>
    <div class="container mt-5">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
