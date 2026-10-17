import { useContext, useState } from 'react';
import "./home.css"
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { StoreContext } from '../../context/StoreContext';

const Home = () => {
  const [category,setCategory] = useState("All")
  const [selectedRestaurantId, setSelectedRestaurantId] = useState("");
  const { restaurants, isCatalogLoading, catalogError } = useContext(StoreContext);

  return (
    <div id='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <section className='restaurant-selection' aria-labelledby='restaurant-heading'>
        <h2 id='restaurant-heading'>Choose a restaurant</h2>
        <div className='restaurant-list'>
          {restaurants.map((restaurant) => (
            <button
              type='button'
              key={restaurant.id}
              className={`restaurant-option ${selectedRestaurantId === restaurant.id ? 'selected' : ''}`}
              onClick={() => setSelectedRestaurantId(restaurant.id)}
              aria-pressed={selectedRestaurantId === restaurant.id}
            >
              <span className='restaurant-option-name'>{restaurant.name}</span>
              <span className='restaurant-option-cuisine'>{restaurant.cuisine}</span>
              <span className='restaurant-option-meta'>★ {restaurant.rating} · {restaurant.delivery_time}</span>
            </button>
          ))}
          <button
            type='button'
            className={`restaurant-option ${selectedRestaurantId === '' ? 'selected' : ''}`}
            onClick={() => setSelectedRestaurantId('')}
            aria-pressed={selectedRestaurantId === ''}
          >
            <span className='restaurant-option-name'>All restaurants</span>
            <span className='restaurant-option-cuisine'>Browse every menu</span>
          </button>
        </div>
      </section>
      {isCatalogLoading && <p className='catalog-status' role='status'>Loading restaurants and menus…</p>}
      {catalogError && (
        <p className='catalog-status catalog-error' role='alert'>
          {catalogError} Start the backend API and refresh this page.
        </p>
      )}
      {!isCatalogLoading && !catalogError && (
        <FoodDisplay category={category} restaurantId={selectedRestaurantId} restaurants={restaurants} />
      )}
    </div>
  )
}

export default Home
