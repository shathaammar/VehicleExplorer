using FluentValidation;
using FluentValidation.AspNetCore;
using VehicleExplorer.Application.Interfaces;
using VehicleExplorer.Application.Services;
using VehicleExplorer.Application.Validators;
using VehicleExplorer.Infrastructure.ExternalApi.Clients;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpClient<IVehicleApiClient, VehicleApiClient>(client =>
{
    client.BaseAddress = new Uri("https://vpic.nhtsa.dot.gov/api/vehicles/");
});

builder.Services.AddValidatorsFromAssemblyContaining<GetModelsRequestValidator>();
builder.Services.AddFluentValidationAutoValidation();

builder.Services.AddScoped<IVehicleService, VehicleService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<VehicleExplorer.API.Middleware.ExceptionHandlingMiddleware>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
