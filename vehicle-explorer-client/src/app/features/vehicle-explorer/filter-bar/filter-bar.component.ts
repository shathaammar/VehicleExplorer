import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../../../core/services/vehicle.service';
import { CarMake, VehicleType } from '../../../core/models/vehicle.models';

export interface SearchCriteria {
  makeId: number;
  makeName: string;
  year: number;
  vehicleType: string;
}

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent implements OnInit {
  @Output() search = new EventEmitter<SearchCriteria>();

  makes: CarMake[] = [];
  vehicleTypes: VehicleType[] = [];

  loadingMakes = true;
  loadingTypes = false;

  selectedMakeId: number | null = null;
  selectedMakeName: string | null = null;
  selectedType: string | null = null;
  year: number | null = null;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getMakes().subscribe({
      next: (makes) => {
        this.makes = makes;
        this.loadingMakes = false;
      },
      error: () => { this.loadingMakes = false; }
    });
  }

  onMakeChange(): void {
    const make = this.makes.find(m => m.id === this.selectedMakeId);
    this.selectedMakeName = make?.name ?? null;

    this.selectedType = null;
    this.vehicleTypes = [];
    this.year = null;

    if (this.selectedMakeId) {
      this.loadingTypes = true;
      this.vehicleService.getVehicleTypes(this.selectedMakeId).subscribe({
        next: (types) => {
          this.vehicleTypes = types;
          this.loadingTypes = false;
        },
        error: () => { this.loadingTypes = false; }
      });
    }
  }

  get canSearch(): boolean {
    return !!(this.selectedMakeId && this.year && this.selectedType);
  }

  onSearch(): void {
    if (this.canSearch) {
      this.search.emit({
        makeId: this.selectedMakeId!,
        makeName: this.selectedMakeName!,
        year: this.year!,
        vehicleType: this.selectedType!
      });
    }
  }
}