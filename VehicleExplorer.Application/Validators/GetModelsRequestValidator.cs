using FluentValidation;
using VehicleExplorer.Application.Requests;

namespace VehicleExplorer.Application.Validators
{
    public class GetModelsRequestValidator : AbstractValidator<GetModelsRequest>
    {
        public GetModelsRequestValidator()
        {
            RuleFor(x => x.MakeId)
                .GreaterThan(0);

            RuleFor(x => x.Year)
                .InclusiveBetween(1900, DateTime.Now.Year + 1);

            RuleFor(x => x.VehicleType)
                .NotEmpty()
                .MaximumLength(50);
        }
    }
}
