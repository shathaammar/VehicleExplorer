# Vehicle Explorer

A web application that lets users select a car make and model year, then explore available vehicle types and models using the NHTSA vPIC API.

## Tech Stack

- **Backend**: ASP.NET Core (.NET 8) — Clean Architecture (API / Application / Infrastructure)
- **Frontend**: Angular (standalone components, SCSS)
- **External API**: [NHTSA vPIC API](https://vpic.nhtsa.dot.gov/api/)

## Project Structure

VehicleExplorer/
├── VehicleExplorer.API/            # Controllers, middleware, startup
├── VehicleExplorer.Application/    # DTOs, interfaces, services, 
├── VehicleExplorer.Domain/         # Domain entities
requests/responses
├── VehicleExplorer.Infrastructure/ # External API client (NHTSA integration)
├── vehicle-explorer-client/        # Angular frontend
└── VehicleExplorer.sln

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18 or later) and npm
- [Angular CLI](https://angular.dev/tools/cli): `npm install -g @angular/cli`

## Running Locally (without Docker)

### 1. Clone the repository

```bash
git clone <repo-url>
cd VehicleExplorer
```

### 2. Run the backend

```bash
cd VehicleExplorer.API
dotnet run --launch-profile https
```

The API will start on `https://localhost:7223` (check `Properties/launchSettings.json` if the port differs on your machine). Swagger UI is available at `https://localhost:7223/swagger`.

> **Note**: The first time you run the API, your browser/OS may ask you to trust the local HTTPS development certificate. If needed, run:
> ```bash
> dotnet dev-certs https --trust
> ```

### 3. Run the frontend

Open a **second terminal**, keeping the backend running in the first:

```bash
cd vehicle-explorer-client
npm install
ng serve
```

The app will be available at `http://localhost:4200`.

> If your backend is running on a different port, update `baseUrl` in `src/app/core/services/vehicle.service.ts` accordingly.

### 4. Use the app

1. Select a car make from the dropdown
2. Enter a model year and select a vehicle type
3. Browse the available models for that combination

## API Endpoints (Backend)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/Vehicle/Makes` | Returns all car makes |
| GET | `/api/Vehicle/vehicle-types?MakeId={id}` | Returns vehicle types for a given make |
| GET | `/api/Vehicle/models?MakeId={id}&Year={year}&VehicleType={type}` | Returns models for a given make, year, and vehicle type |

## Running with Docker

*(to be added)*

## Deployment

Hosted on AWS free tier — see deployment notes below *(to be added)*.