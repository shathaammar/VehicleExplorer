using VehicleExplorer.Domain.DTOs;

namespace VehicleExplorer.Domain.Interfaces;

public interface IVehicleService
{
    Task<IEnumerable<CarMakeDto>> GetMakesAsync();

    Task<IEnumerable<VehicleTypeDto>> GetVehicleTypesAsync(int makeId);

    Task<IEnumerable<VehicleModelDto>> GetModelsAsync(int makeId, int year, string vehicleType);
}