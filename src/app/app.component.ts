import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbCollapseModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuCollapsed = true;
}
