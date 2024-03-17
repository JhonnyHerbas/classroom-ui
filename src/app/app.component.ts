import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClNavbarComponent} from "./components/cl-navbar/cl-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'classroom-frontend';
}
