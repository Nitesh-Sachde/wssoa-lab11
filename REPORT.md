# Lab 11 — Mini CI/CD Report

Workflow summary:

- Code: Simple Node.js API in `backend/` exposing `/` and `/metrics` (Prometheus metrics via `prom-client`).
- CI: GitHub Actions - job `test` runs `npm test` for the backend. `deploy` job runs `docker compose up -d --build` on the runner to build and start services.
- Containerization: `backend/Dockerfile` builds the backend image.
- Monitoring: Prometheus scrapes `backend:3000/metrics` (configured in `monitoring/prometheus.yml`). Grafana is provisioned to use Prometheus and loads a small dashboard `grafana/dashboards/backend-metrics.json`.

How to reproduce locally:

1. Install Docker Desktop.
2. Open a shell in the project root (`202412083_lab11_CI_CD`).
3. Run `docker compose up --build`.
4. Visit Grafana at `http://localhost:3001` and open the dashboard titled "Backend Metrics".

Key observations and notes:

- GitHub Actions on GitHub-hosted runners can run docker-compose but will not persist services after the job. For a real deployment, push built images to a registry and deploy to a hosting environment (VM, cloud run, Kubernetes, etc.).
- To capture the required screenshots: run the workflow on GitHub (push to `main`) and take a screenshot of the workflow run page. For Grafana, run the stack locally and capture the dashboard view showing the metric.

Optional improvements:

- Add image pushing to GitHub Container Registry (requires secrets). Add automated deployment to a cloud VM or Kubernetes cluster.
- Add alerting rules in Prometheus and configure Grafana alerting.
