# Vehicle Explorer

Vehicle Explorer is a full-stack web application that allows users to browse vehicle information using the NHTSA vPIC API. Users can select a vehicle make, model year, and vehicle type to retrieve available models.

The project follows Clean Architecture principles and consists of an ASP.NET Core Web API backend and an Angular frontend. The application is fully containerized using Docker and Docker Compose.

---

## Features

- Browse all available vehicle makes.
- Retrieve vehicle types for a selected make.
- Retrieve vehicle models by make, year, and vehicle type.
- Responsive Angular user interface.
- RESTful ASP.NET Core Web API.
- Dockerized backend and frontend.
- Run the entire application using Docker Compose.

---

## Technologies Used

### Backend

- ASP.NET Core 8
- C#
- Clean Architecture
- HttpClient
- Dependency Injection

### Frontend

- Angular 18
- TypeScript
- SCSS
- RxJS

### DevOps

- Docker
- Docker Compose

### External API

- NHTSA vPIC API

https://vpic.nhtsa.dot.gov/api/

---

## Project Structure

```text
VehicleExplorer
│
├── VehicleExplorer.API
├── VehicleExplorer.Application
├── VehicleExplorer.Domain
├── VehicleExplorer.Infrastructure
│
├── vehicle-explorer-client
│
├── Dockerfile
├── docker-compose.yml
└── VehicleExplorer.sln
```

---

## Prerequisites

Before running the project, make sure you have:

- .NET 8 SDK
- Node.js 18 or later
- Angular CLI
- Docker Desktop

Install Angular CLI:

```bash
npm install -g @angular/cli
```

---

# Run Without Docker

## Backend

```bash
cd VehicleExplorer.API

dotnet run --launch-profile https
```

Swagger:

```
https://localhost:7223/swagger
```

---

## Frontend

```bash
cd vehicle-explorer-client

npm install

ng serve
```

Application:

```
http://localhost:4200
```

---

# Run Using Docker

## Build and Run

From the project root:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d --build
```

---

## Application URLs

Frontend

```
http://localhost:4200
```

Backend Swagger

```
http://localhost:8080/swagger
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/Vehicle/Makes` | Returns all vehicle makes |
| GET | `/api/Vehicle/vehicle-types?MakeId={id}` | Returns vehicle types for a make |
| GET | `/api/Vehicle/models?MakeId={id}&Year={year}&VehicleType={type}` | Returns vehicle models |

---

## Notes

- The application does not use a local database.
- All vehicle information is retrieved dynamically from the NHTSA vPIC API.
- Backend follows Clean Architecture principles.
- The frontend is served using Nginx inside Docker.

---

## Author

Developed by **Shatha Ammar**