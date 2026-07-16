using System.Net.Http.Json;
using VehicleExplorer.Application.DTOs;
using VehicleExplorer.Application.Exceptions;
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

    public async Task<IEnumerable<VehicleTypeDto>> GetVehicleTypesAsync(int makeId)
    {
        try
        {
            var response = await _httpClient
    .GetFromJsonAsync<NhtsaResponse<NhtsaVehicleTypeResponse>>(
        $"GetVehicleTypesForMakeId/{makeId}?format=json");

            Console.WriteLine($"Count: {response?.Results.Count()}");
            foreach (var r in response?.Results ?? Enumerable.Empty<NhtsaVehicleTypeResponse>())
            {
                Console.WriteLine($"RAW -> Id: {r.VehicleTypeId}, Name: {r.VehicleTypeName}");
            }

            return response?.Results
                .Select(x => new VehicleTypeDto { Id = x.VehicleTypeId, Name = x.VehicleTypeName })
                ?? Enumerable.Empty<VehicleTypeDto>();
        }
        catch (HttpRequestException ex)
        {
            throw new ExternalApiException("Failed to retrieve vehicle types from NHTSA.", ex);
        }
        catch (TaskCanceledException ex)
        {
            throw new ExternalApiException("Request to NHTSA timed out.", ex);
        }
    }

    public async Task<IEnumerable<VehicleModelDto>> GetModelsAsync(int makeId, int year, string vehicleType)
    {
        try
        {
            var url = string.IsNullOrWhiteSpace(vehicleType)
            ? $"GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json"
            : $"GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}/vehicletype/{Uri.EscapeDataString(vehicleType)}?format=json";

            var response = await _httpClient
                .GetFromJsonAsync<NhtsaResponse<NhtsaVehicleModelResponse>>(url);

            return response?.Results
                .Select(x => new VehicleModelDto { Id = x.Model_ID, Name = x.Model_Name })
                ?? Enumerable.Empty<VehicleModelDto>();
        }
        catch (HttpRequestException ex)
        {
            throw new ExternalApiException("Failed to retrieve vehicle models from NHTSA.", ex);
        }
        catch (TaskCanceledException ex)
        {
            throw new ExternalApiException("Request to NHTSA timed out.", ex);
        }

    }

    public async Task<IEnumerable<CarMakeDto>> GetMakesAsync()
    {
        try
        {
            var response = await _httpClient
                .GetFromJsonAsync<NhtsaResponse<NhtsaMakeResponse>>("getallmakes?format=json");

            return response?.Results
                .Select(x => new CarMakeDto { Id = x.Make_ID, Name = x.Make_Name })
                ?? Enumerable.Empty<CarMakeDto>();
        }
        catch (HttpRequestException ex)
        {
            throw new ExternalApiException("Failed to retrieve car makes from NHTSA.", ex);
        }
        catch (TaskCanceledException ex)
        {
            throw new ExternalApiException("Request to NHTSA timed out.", ex);
        }
    }
}