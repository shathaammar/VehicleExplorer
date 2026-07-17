import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MakeSelectorComponent } from './features/vehicle-explorer/make-selector/make-selector.component';
import { SpecPlateComponent } from './features/vehicle-explorer/spec-plate/spec-plate.component';
import { SelectionState } from './core/models/selection-state.model';
import { CarMake } from './core/models/vehicle.models';
import { YearTypeSelection, YearTypeSelectorComponent } from './features/vehicle-explorer/year-type-selector/year-type-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MakeSelectorComponent, SpecPlateComponent, YearTypeSelectorComponent],
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

  selectedMakeId: number | null = null;

  onMakeSelected(make: CarMake): void {
  this.selectedMakeId = make.id;
  this.selection = { ...this.selection, make: make.name, year: null, vehicleType: null, model: null };
}

onYearTypeSelected(yearType: YearTypeSelection): void {
  this.selection = { ...this.selection, year: yearType.year, vehicleType: yearType.vehicleType };
}
}