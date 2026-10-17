from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.data import MENU_ITEMS, RESTAURANTS, MenuItem, Restaurant


app = FastAPI(title="Food Delivery API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:4173",
        "http://127.0.0.1:4173",
    ],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

assets_directory = Path(__file__).resolve().parents[2] / "frontend" / "src" / "assets"
app.mount("/assets", StaticFiles(directory=assets_directory), name="assets")


@app.get("/api/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/restaurants", response_model=list[Restaurant])
def get_restaurants() -> list[Restaurant]:
    return RESTAURANTS


@app.get("/api/restaurants/{restaurant_id}", response_model=Restaurant)
def get_restaurant(restaurant_id: str) -> Restaurant:
    restaurant = next(
        (item for item in RESTAURANTS if item["id"] == restaurant_id),
        None,
    )
    if restaurant is None:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return restaurant


@app.get("/api/menu", response_model=list[MenuItem])
def get_all_menu_items() -> list[MenuItem]:
    return MENU_ITEMS


@app.get("/api/restaurants/{restaurant_id}/menu", response_model=list[MenuItem])
def get_restaurant_menu(restaurant_id: str) -> list[MenuItem]:
    if not any(item["id"] == restaurant_id for item in RESTAURANTS):
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return [
        item for item in MENU_ITEMS if item["restaurant_id"] == restaurant_id
    ]
