import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './cart.css';

const Cart = () => {
  const { food_list, cartItems, addToCart, removeFromCart, cartTotal } = useContext(StoreContext);
  const itemsInCart = food_list.filter((item) => cartItems[item._id] > 0);

  if (itemsInCart.length === 0) {
    return (
      <main className='cart-page'>
        <h1>Your cart</h1>
        <div className='cart-empty'>
          <p>Your cart is empty.</p>
          <Link to='/'>Browse the menu</Link>
        </div>
      </main>
    );
  }

  return (
    <main className='cart-page'>
      <h1>Your cart</h1>
      <div className='cart-layout'>
        <div className='cart-items'>
          {itemsInCart.map((item) => {
            const quantity = cartItems[item._id];
            return (
              <article className='cart-item' key={item._id}>
                <img className='cart-item-image' src={item.image} alt={item.name} />
                <div className='cart-item-details'>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className='cart-quantity'>
                    <button type='button' onClick={() => removeFromCart(item._id)} aria-label={`Remove one ${item.name}`}>−</button>
                    <span>{quantity}</span>
                    <button type='button' onClick={() => addToCart(item._id)} aria-label={`Add one ${item.name}`}>+</button>
                  </div>
                </div>
                <strong className='cart-item-subtotal'>${(item.price * quantity).toFixed(2)}</strong>
                <button className='cart-remove' type='button' onClick={() => {
                  for (let count = 0; count < quantity; count += 1) {
                    removeFromCart(item._id);
                  }
                }} aria-label={`Remove ${item.name} from cart`}>×</button>
              </article>
            );
          })}
        </div>

        <aside className='cart-summary'>
          <h2>Order summary</h2>
          <div className='cart-summary-row'>
            <span>Items ({itemsInCart.reduce((total, item) => total + cartItems[item._id], 0)})</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className='cart-summary-row'>
            <span>Delivery</span>
            <span>Calculated at checkout</span>
          </div>
          <div className='cart-summary-total'>
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <Link className='cart-checkout' to='/order'>Proceed to checkout</Link>
          <Link className='cart-continue' to='/'>Continue shopping</Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
