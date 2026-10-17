import { useContext } from 'react'
import './food-item.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  const quantity = cartItems[id] || 0

  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt={name} />
        {quantity === 0 ? (
          <button className='food-item-add' type='button' onClick={() => addToCart(id)} aria-label={`Add ${name} to cart`}>
            <img src={assets.add_icon_green} alt='' />
          </button>
        ) : (
          <div className='food-item-quantity'>
            <button type='button' onClick={() => removeFromCart(id)} aria-label={`Remove one ${name}`}>
              <img src={assets.remove_icon_red} alt='' />
            </button>
            <span>{quantity}</span>
            <button type='button' onClick={() => addToCart(id)} aria-label={`Add one ${name}`}>
              <img src={assets.add_icon_green} alt='' />
            </button>
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='rating stars' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
