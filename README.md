# Vehicle Explorer

A web application that allows users to select a vehicle make and model year, then explore available vehicle types and models using the NHTSA vPIC API.

## Tech Stack

- **Backend**: ASP.NET Core (.NET 8) — Clean Architecture
  - API
  - Application
  - Domain
  - Infrastructure
- **Frontend**: Angular 18 (Standalone Components, SCSS)
- **External API**: NHTSA vPIC API  
  https://vpic.nhtsa.dot.gov/api/

---

## Project Structure
VehicleExplorer/
│
├── VehicleExplorer.API/ # Controllers, middleware, API configuration
├── VehicleExplorer.Application/ # DTOs, interfaces, services, requests/responses
├── VehicleExplorer.Domain/ # Domain entities
├── VehicleExplorer.Infrastructure/ # External API client and NHTSA integration
│
├── vehicle-explorer-client/ # Angular frontend
│
└── VehicleExplorer.sln


---

# Prerequisites

Make sure the following tools are installed:

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18 or later)
- Angular CLI

Install Angular CLI globally:

```bash
npm install -g @angular/cli