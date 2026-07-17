import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VehicleService } from '../../../core/services/vehicle.service';
import { CarMake } from '../../../core/models/vehicle.models';

@Component({
  selector: 'app-make-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './make-selector.component.html',
  styleUrls: ['./make-selector.component.scss']
})
export class MakeSelectorComponent implements OnInit {
  @Output() makeSelected = new EventEmitter<CarMake>();

  makes: CarMake[] = [];
  filteredMakes: CarMake[] = [];
  searchTerm = '';
  loading = true;
  selectedMakeId: number | null = null;
  errorMessage: string | null = null;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getMakes().subscribe({
      next: (makes) => {
        this.makes = makes;
        this.filteredMakes = makes;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load car makes. Please check your connection and try again.';
        this.loading = false;
      }
    }); 
  }

  onMakeChange(makeId: string): void {
    const make = this.makes.find(m => m.id === +makeId);
    if (make) {
      this.selectedMakeId = make.id;
      this.makeSelected.emit(make);
    }
  }
}
