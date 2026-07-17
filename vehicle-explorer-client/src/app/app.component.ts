import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MakeSelectorComponent } from './features/vehicle-explorer/make-selector/make-selector.component';
import { SpecPlateComponent } from './features/vehicle-explorer/spec-plate/spec-plate.component';
import { SelectionState } from './core/models/selection-state.model';
import { CarMake } from './core/models/vehicle.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MakeSelectorComponent, SpecPlateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selection: SelectionState = {
    make: null,
    year: null,
    vehicleType: null,
    model: null
  };

  onMakeSelected(make: CarMake): void {
    this.selection = { ...this.selection, make: make.name };
  }
}