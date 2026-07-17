import { Component } from '@angular/core';
import { MakeSelectorComponent } from "./features/vehicle-explorer/make-selector/make-selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MakeSelectorComponent]
})
export class AppComponent {
  title = 'vehicle-explorer-client';
}
