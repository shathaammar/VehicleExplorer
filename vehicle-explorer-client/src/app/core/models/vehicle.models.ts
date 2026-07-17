export interface CarMake {
  id: number;
  name: string;
}

export interface VehicleType {
  id: number;
  name: string;
}

export interface VehicleModel {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: string[] | null;
}