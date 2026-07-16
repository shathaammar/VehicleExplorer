using System.Net.Http.Json;
using VehicleExplorer.Application.DTOs;
using VehicleExplorer.Application.Interfaces;
using VehicleExplorer.Infrastructure.ExternalApi.Models;

namespace VehicleExplorer.Infrastructure.ExternalApi.Clients;

public class VehicleApiClient : IVehicleApiClient
{
    private readonly HttpClient _httpClient;


    public VehicleApiClient(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public Task<IEnumerable<VehicleTypeDto>> GetVehicleTypesAsync(int makeId)
    {
        // TODO: implement API call to retrieve vehicle types for a make
        return Task.FromResult(Enumerable.Empty<VehicleTypeDto>());
    }

    public Task<IEnumerable<VehicleModelDto>> GetModelsAsync(int makeId, int year, string vehicleType)
    {
        // TODO: implement API call to retrieve models for a make/year/type
        return Task.FromResult(Enumerable.Empty<VehicleModelDto>());
    }


    public async Task<IEnumerable<CarMakeDto>> GetMakesAsync()
    {
        var response = await _httpClient
            .GetFromJsonAsync<NhtsaResponse<NhtsaMakeResponse>>(
                "getallmakes?format=json");


        return response?.Results
            .Select(x => new CarMakeDto
            {
                Id = x.Make_ID,
                Name = x.Make_Name
            })
            ?? Enumerable.Empty<CarMakeDto>();
    }
}