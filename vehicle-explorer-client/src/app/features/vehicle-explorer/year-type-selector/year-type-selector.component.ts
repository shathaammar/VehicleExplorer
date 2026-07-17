import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../../core/services/vehicle.service';
import { VehicleType } from '../../../core/models/vehicle.models';

export interface YearTypeSelection {
  year: number;
  vehicleType: string;
}

@Component({
  selector: 'app-year-type-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './year-type-selector.component.html',
  styleUrl: './year-type-selector.component.scss'
})
export class YearTypeSelectorComponent implements OnChanges {
  @Input() makeId: number | null = null;
  @Output() yearTypeSelected = new EventEmitter<YearTypeSelection>();

  vehicleTypes: VehicleType[] = [];
  loading = false;

  year: number | null = null;
  selectedType: string | null = null;

  minYear = 1980;
  maxYear = new Date().getFullYear() + 1;

  errorMessage: string | null = null;

  constructor(private vehicleService: VehicleService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['makeId'] && this.makeId) {
      this.resetSelection();
      this.loading = true;
      this.vehicleService.getVehicleTypes(this.makeId).subscribe({
        next: (types) => {
          this.vehicleTypes = types;
          this.loading = false;
        },
        error: () => {
          this.errorMessage = 'Could not load vehicle types. Please try again.';
          this.loading = false;
        }
      });
    }
  }

  private resetSelection(): void {
    this.vehicleTypes = [];
    this.year = null;
    this.selectedType = null;
  }

  onYearChange(value: string): void {
    this.year = value ? +value : null;
    this.emitIfComplete();
  }

  selectType(typeName: string): void {
    this.selectedType = typeName;
    this.emitIfComplete();
  }

  private emitIfComplete(): void {
    if (this.year && this.selectedType) {
      this.yearTypeSelected.emit({ year: this.year, vehicleType: this.selectedType });
    }
  }
}