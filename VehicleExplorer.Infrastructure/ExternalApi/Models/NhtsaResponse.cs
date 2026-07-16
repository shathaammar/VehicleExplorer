namespace VehicleExplorer.Infrastructure.ExternalApi.Models;

public class NhtsaResponse<T>
{
    public List<T> Results { get; set; } = [];
}