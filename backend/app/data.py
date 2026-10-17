from typing import TypedDict


class Restaurant(TypedDict):
    id: str
    name: str
    cuisine: str
    description: str
    rating: float
    delivery_time: str


class MenuItem(TypedDict):
    _id: str
    restaurant_id: str
    name: str
    price: float
    description: str
    category: str
    image: str


RESTAURANTS: list[Restaurant] = [
    {
        "id": "green-fork",
        "name": "The Green Fork",
        "cuisine": "Fresh & vegetarian",
        "description": "Bright salads and wholesome plant-forward favorites.",
        "rating": 4.8,
        "delivery_time": "20-30 min",
    },
    {
        "id": "pasta-bella",
        "name": "Pasta Bella",
        "cuisine": "Italian",
        "description": "Comforting handmade-style pasta and classic Italian flavors.",
        "rating": 4.7,
        "delivery_time": "25-35 min",
    },
    {
        "id": "noodle-house",
        "name": "Noodle House",
        "cuisine": "Asian",
        "description": "Stir-fried noodles and satisfying bowls made to order.",
        "rating": 4.6,
        "delivery_time": "20-30 min",
    },
    {
        "id": "sweet-cravings",
        "name": "Sweet Cravings",
        "cuisine": "Desserts",
        "description": "A little something sweet, from ice cream to celebration cake.",
        "rating": 4.9,
        "delivery_time": "15-25 min",
    },
]


MENU_ITEMS: list[MenuItem] = [
    {
        "_id": "green-fork-1",
        "restaurant_id": "green-fork",
        "name": "Greek Salad",
        "price": 12.0,
        "description": "Crisp greens, cucumber, tomato, olives, and feta.",
        "category": "Salad",
        "image": "/assets/food_1.png",
    },
    {
        "_id": "green-fork-2",
        "restaurant_id": "green-fork",
        "name": "Veg Salad",
        "price": 18.0,
        "description": "A colorful seasonal vegetable salad with a light dressing.",
        "category": "Salad",
        "image": "/assets/food_2.png",
    },
    {
        "_id": "green-fork-3",
        "restaurant_id": "green-fork",
        "name": "Fried Cauliflower",
        "price": 22.0,
        "description": "Golden cauliflower florets with a savory herb seasoning.",
        "category": "Pure Veg",
        "image": "/assets/food_22.png",
    },
    {
        "_id": "green-fork-4",
        "restaurant_id": "green-fork",
        "name": "Rice Zucchini",
        "price": 12.0,
        "description": "Tender zucchini served with seasoned rice.",
        "category": "Pure Veg",
        "image": "/assets/food_24.png",
    },
    {
        "_id": "pasta-bella-1",
        "restaurant_id": "pasta-bella",
        "name": "Cheese Pasta",
        "price": 12.0,
        "description": "Pasta tossed in a smooth, rich cheese sauce.",
        "category": "Pasta",
        "image": "/assets/food_25.png",
    },
    {
        "_id": "pasta-bella-2",
        "restaurant_id": "pasta-bella",
        "name": "Tomato Pasta",
        "price": 18.0,
        "description": "Pasta with a slow-cooked tomato and basil sauce.",
        "category": "Pasta",
        "image": "/assets/food_26.png",
    },
    {
        "_id": "pasta-bella-3",
        "restaurant_id": "pasta-bella",
        "name": "Creamy Pasta",
        "price": 16.0,
        "description": "Creamy pasta finished with herbs and cracked pepper.",
        "category": "Pasta",
        "image": "/assets/food_27.png",
    },
    {
        "_id": "pasta-bella-4",
        "restaurant_id": "pasta-bella",
        "name": "Chicken Pasta",
        "price": 24.0,
        "description": "Pasta with tender chicken in a savory sauce.",
        "category": "Pasta",
        "image": "/assets/food_28.png",
    },
    {
        "_id": "noodle-house-1",
        "restaurant_id": "noodle-house",
        "name": "Butter Noodles",
        "price": 14.0,
        "description": "Soft noodles tossed with butter and a touch of seasoning.",
        "category": "Noodles",
        "image": "/assets/food_29.png",
    },
    {
        "_id": "noodle-house-2",
        "restaurant_id": "noodle-house",
        "name": "Veg Noodles",
        "price": 12.0,
        "description": "Wok-tossed noodles with fresh vegetables.",
        "category": "Noodles",
        "image": "/assets/food_30.png",
    },
    {
        "_id": "noodle-house-3",
        "restaurant_id": "noodle-house",
        "name": "Somen Noodles",
        "price": 20.0,
        "description": "Delicate somen noodles with vegetables and a light sauce.",
        "category": "Noodles",
        "image": "/assets/food_31.png",
    },
    {
        "_id": "noodle-house-4",
        "restaurant_id": "noodle-house",
        "name": "Cooked Noodles",
        "price": 15.0,
        "description": "A hearty noodle bowl with a savory house sauce.",
        "category": "Noodles",
        "image": "/assets/food_32.png",
    },
    {
        "_id": "sweet-cravings-1",
        "restaurant_id": "sweet-cravings",
        "name": "Ripple Ice Cream",
        "price": 14.0,
        "description": "Creamy ice cream with ribbons of fruit ripple.",
        "category": "Deserts",
        "image": "/assets/food_9.png",
    },
    {
        "_id": "sweet-cravings-2",
        "restaurant_id": "sweet-cravings",
        "name": "Fruit Ice Cream",
        "price": 22.0,
        "description": "Cool, creamy ice cream with pieces of seasonal fruit.",
        "category": "Deserts",
        "image": "/assets/food_10.png",
    },
    {
        "_id": "sweet-cravings-3",
        "restaurant_id": "sweet-cravings",
        "name": "Cup Cake",
        "price": 14.0,
        "description": "A soft vanilla cupcake finished with a swirl of frosting.",
        "category": "Cake",
        "image": "/assets/food_17.png",
    },
    {
        "_id": "sweet-cravings-4",
        "restaurant_id": "sweet-cravings",
        "name": "Butterscotch Cake",
        "price": 20.0,
        "description": "Moist cake layered with creamy butterscotch.",
        "category": "Cake",
        "image": "/assets/food_19.png",
    },
]
