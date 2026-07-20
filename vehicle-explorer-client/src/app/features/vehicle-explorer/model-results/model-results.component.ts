import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../../core/services/vehicle.service';
import { VehicleModel } from '../../../core/models/vehicle.models';
import { SearchCriteria } from '../filter-bar/filter-bar.component';

@Component({
  selector: 'app-model-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-results.component.html',
  styleUrl: './model-results.component.scss'
})
export class ModelResultsComponent implements OnChanges {
  @Input() searchCriteria: SearchCriteria | null = null;

  models: VehicleModel[] = [];
  loading = false;
  errorMessage: string | null = null;
  hasSearched = false;

  constructor(private vehicleService: VehicleService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchCriteria'] && this.searchCriteria) {
      this.hasSearched = true;
      this.errorMessage = null;
      this.loading = true;

      this.vehicleService.getModels(
        this.searchCriteria.makeId,
        this.searchCriteria.year,
        this.searchCriteria.vehicleType
      ).subscribe({
        next: (models) => {
          this.models = models;
          this.loading = false;
        },
        error: () => {
          this.errorMessage = 'Could not load models. Please try again.';
          this.loading = false;
        }
      });
    }
  }
}