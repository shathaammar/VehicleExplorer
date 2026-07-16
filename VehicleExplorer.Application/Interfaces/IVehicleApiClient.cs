using VehicleExplorer.Application.DTOs;

namespace VehicleExplorer.Application.Interfaces;

public interface IVehicleApiClient
{
    Task<IEnumerable<CarMakeDto>> GetMakesAsync();

    Task<IEnumerable<VehicleTypeDto>> GetVehicleTypesAsync(int makeId);

    Task<IEnumerable<VehicleModelDto>> GetModelsAsync(int makeId, int year, string vehicleType);
}