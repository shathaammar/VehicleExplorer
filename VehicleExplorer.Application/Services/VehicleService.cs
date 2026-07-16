using VehicleExplorer.Application.DTOs;
using VehicleExplorer.Application.Interfaces;

namespace VehicleExplorer.Application.Services
{
    public class VehicleService : IVehicleService
    {
        private readonly IVehicleApiClient _vehicleApiClient;

        public VehicleService(IVehicleApiClient vehicleApiClient)
        {
            _vehicleApiClient = vehicleApiClient;
        }

        public Task<IEnumerable<CarMakeDto>> GetMakesAsync()
        {
            return _vehicleApiClient.GetMakesAsync();
        }

        public Task<IEnumerable<VehicleTypeDto>> GetVehicleTypesAsync(int makeId)
        {
            return _vehicleApiClient.GetVehicleTypesAsync(makeId);
        }

        public Task<IEnumerable<VehicleModelDto>> GetModelsAsync(int makeId, int year, string vehicleType)
        {
            return _vehicleApiClient.GetModelsAsync(makeId, year, vehicleType);
        }
    }
}
