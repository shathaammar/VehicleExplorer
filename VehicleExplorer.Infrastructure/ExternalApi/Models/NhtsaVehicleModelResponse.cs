namespace VehicleExplorer.Infrastructure.ExternalApi.Models;

public class NhtsaVehicleModelResponse
{
    public int Make_ID { get; set; }
    public string Make_Name { get; set; } = string.Empty;
    public int Model_ID { get; set; }
    public string Model_Name { get; set; } = string.Empty;
    public int VehicleTypeId { get; set; }
    public string VehicleTypeName { get; set; } = string.Empty;
}