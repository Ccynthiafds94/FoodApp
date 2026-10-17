import { useContext } from 'react'
import './food-display.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category, restaurantId, restaurants }) => {
    const { food_list, searchQuery } = useContext(StoreContext)
    const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === restaurantId)
    const filteredFood = food_list.filter((item) => {
        const matchesCategory = category === "All" || item.category === category;
        const matchesRestaurant = !restaurantId || item.restaurant_id === restaurantId;
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch = !query
            || item.name.toLowerCase().includes(query)
            || item.description.toLowerCase().includes(query)
            || item.category.toLowerCase().includes(query);
        return matchesCategory && matchesRestaurant && matchesSearch;
    });

    return (
        <div className='food-display' id='food-display'>
            <h2>
                {searchQuery.trim()
                    ? `Search results for "${searchQuery}"`
                    : selectedRestaurant
                        ? `${selectedRestaurant.name} menu`
                        : 'Menus from all restaurants'}
            </h2>
            <div className="food-display-list">
                {filteredFood.map((item) => {
                    return <FoodItem key={item._id} id={item._id} name={item.name} category={item.category} description={item.description} price={item.price} image={item.image} />
                })}
                {filteredFood.length === 0 && <p className='food-display-empty'>No dishes match these filters.</p>}
            </div>
        </div>
    )
}

export default FoodDisplay
