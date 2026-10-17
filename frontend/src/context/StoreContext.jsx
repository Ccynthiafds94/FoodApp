import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

const StoreContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [food_list, setFoodList] = useState([]);
    const [isCatalogLoading, setIsCatalogLoading] = useState(true);
    const [catalogError, setCatalogError] = useState("");
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const loadCatalog = async () => {
            try {
                const [restaurantsResponse, menuResponse] = await Promise.all([
                    fetch(`${API_BASE}/api/restaurants`, { signal: controller.signal }),
                    fetch(`${API_BASE}/api/menu`, { signal: controller.signal }),
                ]);

                if (!restaurantsResponse.ok || !menuResponse.ok) {
                    throw new Error("The restaurant catalog could not be loaded.");
                }

                const [restaurantData, menuData] = await Promise.all([
                    restaurantsResponse.json(),
                    menuResponse.json(),
                ]);
                setRestaurants(restaurantData);
                setFoodList(menuData.map((item) => ({
                    ...item,
                    image: `${API_BASE}${item.image}`,
                })));
            } catch (error) {
                if (error.name !== "AbortError") {
                    setCatalogError(error.message || "The restaurant catalog could not be loaded.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsCatalogLoading(false);
                }
            }
        };

        loadCatalog();
        return () => controller.abort();
    }, []);

    const addToCart = (id) => {
        setCartItems((items) => ({ ...items, [id]: (items[id] || 0) + 1 }));
    };

    const removeFromCart = (id) => {
        setCartItems((items) => {
            const quantity = items[id] || 0;
            if (quantity <= 1) {
                const updatedItems = { ...items };
                delete updatedItems[id];
                return updatedItems;
            }
            return { ...items, [id]: quantity - 1 };
        });
    };

    const clearCart = () => setCartItems({});

    const cartCount = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    const cartTotal = food_list.reduce(
        (total, item) => total + item.price * (cartItems[item._id] || 0),
        0
    );

    const contextValue = {
        restaurants,
        food_list,
        isCatalogLoading,
        catalogError,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
        searchQuery,
        setSearchQuery,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;