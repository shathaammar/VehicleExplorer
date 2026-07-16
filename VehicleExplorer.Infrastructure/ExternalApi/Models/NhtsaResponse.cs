namespace VehicleExplorer.Infrastructure.ExternalApi.Models;

public class NhtsaResponse<T>
{
    public int Count { get; set; }

    public string Message { get; set; } = string.Empty;

    public List<T> Results { get; set; } = [];
}