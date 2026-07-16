namespace VehicleExplorer.Application.Requests
{
    public class GetModelsRequest
    {
        public int MakeId { get; set; }

        public int Year { get; set; }

        public string VehicleType { get; set; } = string.Empty;
    }
}
