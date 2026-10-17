# Food Delivery API

This folder contains the Python FastAPI service for the restaurant and menu catalog.

## Run locally

From this folder, create and activate a virtual environment, then install and start the API:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The frontend runs separately from `frontend` with `npm run dev`. The API allows the local Vite development and preview origins on ports 5173 and 4173.

## Endpoints

- `GET /api/health`
- `GET /api/restaurants`
- `GET /api/restaurants/{restaurant_id}`
- `GET /api/menu`
- `GET /api/restaurants/{restaurant_id}/menu`

Interactive API docs are available at `/docs` while the server is running. Restaurant and menu data is currently seeded in memory; changes are reset when the API restarts.
