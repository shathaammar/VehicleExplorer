using FluentValidation;
using VehicleExplorer.Application.Requests;

namespace VehicleExplorer.Application.Validators
{
    public class GetVehicleTypesRequestValidator : AbstractValidator<GetVehicleTypesRequest>
    {
        public GetVehicleTypesRequestValidator()
        {
            RuleFor(x => x.MakeId)
                .GreaterThan(0)
                .WithMessage("MakeId must be greater than zero.");
        }
    }
}
