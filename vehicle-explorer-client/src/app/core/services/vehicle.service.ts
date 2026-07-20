import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponse, CarMake, VehicleType, VehicleModel } from '../models/vehicle.models';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  private readonly baseUrl = 'http://localhost:8080/api/Vehicle';

  constructor(private http: HttpClient) {}

  getMakes(): Observable<CarMake[]> {
    return this.http.get<ApiResponse<CarMake[]>>(`${this.baseUrl}/Makes`)
      .pipe(map(res => res.data));
  }

  getVehicleTypes(makeId: number): Observable<VehicleType[]> {
    return this.http.get<ApiResponse<VehicleType[]>>(`${this.baseUrl}/vehicle-types`, {
      params: { MakeId: makeId }
    })
      .pipe(map(res => res.data));
  }

  getModels(makeId: number, year: number, vehicleType: string): Observable<VehicleModel[]> {
    return this.http.get<ApiResponse<VehicleModel[]>>(`${this.baseUrl}/models`, {
      params: { MakeId: makeId, Year: year, VehicleType: vehicleType }
    }).pipe(map(res => res.data));
  }
}
