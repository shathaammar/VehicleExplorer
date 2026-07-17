import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MakeSelectorComponent } from './features/vehicle-explorer/make-selector/make-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MakeSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vehicle-explorer-client';
}