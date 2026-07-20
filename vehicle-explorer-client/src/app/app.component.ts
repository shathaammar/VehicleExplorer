import { Component } from '@angular/core';
import { FilterBarComponent, SearchCriteria } from './features/vehicle-explorer/filter-bar/filter-bar.component';
import { ModelResultsComponent } from './features/vehicle-explorer/model-results/model-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilterBarComponent, ModelResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchCriteria: SearchCriteria | null = null;

  onSearch(criteria: SearchCriteria): void {
    this.searchCriteria = criteria;
  }
}