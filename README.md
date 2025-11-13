# Mini CI/CD project (IT644 - WSSOA Lab 11)

This project is a minimal CI/CD demo that includes:

- A simple Node.js API (`backend`) exposing Prometheus metrics.
- Containerization with Docker (see `backend/Dockerfile`).
- A `docker-compose.yml` to run the backend, Prometheus, and Grafana locally.
- A GitHub Actions workflow at `.github/workflows/pipeline.yml` which runs tests and brings up the stack via `docker compose`.

Quick start (Windows - cmd.exe):

1. Install prerequisites:

   - Docker Desktop (with WSL2 on Windows)
   - Node.js (for running tests locally)

2. From project root run:

```cmd
cd 202412083_lab11_CI_CD
cd backend
npm install
npm test
cd ..
docker compose up --build
```

3. Open services:

- Backend: http://localhost:3000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001 (user: `admin`, password: `admin`)

To stop:

```cmd
docker compose down
```
