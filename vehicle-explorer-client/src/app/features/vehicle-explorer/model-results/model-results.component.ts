import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../../core/services/vehicle.service';
import { VehicleModel } from '../../../core/models/vehicle.models';

@Component({
  selector: 'app-model-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-results.component.html',
  styleUrl: './model-results.component.scss'
})
export class ModelResultsComponent implements OnChanges {
  @Input() makeId: number | null = null;
  @Input() year: number | null = null;
  @Input() vehicleType: string | null = null;
  @Output() modelSelected = new EventEmitter<string>();

  models: VehicleModel[] = [];
  loading = false;
  selectedModelId: number | null = null;

  errorMessage: string | null = null;

  constructor(private vehicleService: VehicleService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.makeId && this.year && this.vehicleType) {
      this.selectedModelId = null;
      this.loading = true;
      this.vehicleService.getModels(this.makeId, this.year, this.vehicleType).subscribe({
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

  selectModel(model: VehicleModel): void {
    this.selectedModelId = model.id;
    this.modelSelected.emit(model.name);
  }
}