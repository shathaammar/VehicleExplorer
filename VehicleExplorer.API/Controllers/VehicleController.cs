using Microsoft.AspNetCore.Mvc;
using VehicleExplorer.Application.DTOs;
using VehicleExplorer.Application.Interfaces;
using VehicleExplorer.Application.Requests;
using VehicleExplorer.Application.Responses;

namespace VehicleExplorer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehicleController : ControllerBase
    {
        private readonly IVehicleService _vehicleService;

        public VehicleController(IVehicleService vehicleService)
        {
            _vehicleService = vehicleService;
        }

        [HttpGet("Makes")]
        public async Task<IActionResult> GetMakes()
        {
            var makes = await _vehicleService.GetMakesAsync();

            return Ok(ApiResponse<IEnumerable<CarMakeDto>>
                .SuccessResponse(makes, "Car makes retrieved successfully."));
        }

        [HttpGet("vehicle-types")]
        public async Task<IActionResult> GetVehicleTypes([FromQuery] GetVehicleTypesRequest request)
        {
            var vehicleTypes = await _vehicleService.GetVehicleTypesAsync(request.MakeId);

            return Ok(ApiResponse<IEnumerable<VehicleTypeDto>>
                .SuccessResponse(vehicleTypes, "Vehicle types retrieved successfully."));
        }

        [HttpGet("models")]
        public async Task<IActionResult> GetModels(GetModelsRequest request)
        {
            var models = await _vehicleService.GetModelsAsync(
                request.MakeId,
                request.Year,
                request.VehicleType);

            return Ok(ApiResponse<IEnumerable<VehicleModelDto>>
                .SuccessResponse(models, "Vehicle models retrieved successfully."));
        }
    }
}
