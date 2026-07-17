import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionState } from '../../../core/models/selection-state.model';

@Component({
  selector: 'app-spec-plate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spec-plate.component.html',
  styleUrl: './spec-plate.component.scss'
})
export class SpecPlateComponent {
  @Input() selection: SelectionState = {
    make: null,
    year: null,
    vehicleType: null,
    model: null
  };
}