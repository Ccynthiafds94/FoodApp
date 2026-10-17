import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './placeorder.css';

const PlaceOrder = () => {
  const { food_list, cartItems, cartTotal, clearCart } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [order, setOrder] = useState(null);
  const itemsInCart = food_list.filter((item) => cartItems[item._id] > 0);
  const deliveryFee = 2.5;

  const placeOrder = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setOrder({
      id: `FD-${Date.now().toString(36).toUpperCase()}`,
      name: formData.get('name'),
      paymentMethod,
      total: cartTotal + deliveryFee,
    });
    clearCart();
  };

  if (order) {
    return (
      <main className='place-order-page'>
        <section className='order-confirmation' role='status'>
          <div className='confirmation-check' aria-hidden='true'>✓</div>
          <h1>Thanks, {order.name}!</h1>
          <p>Your demo order has been placed.</p>
          <div className='confirmation-details'>
            <span>Order number</span><strong>{order.id}</strong>
            <span>Payment</span>
            <strong>{order.paymentMethod === 'cash' ? 'Cash on delivery' : 'Card (demo)'}</strong>
            <span>Total</span><strong>${order.total.toFixed(2)}</strong>
          </div>
          <p className='demo-notice'>This is a demo checkout. No payment was processed.</p>
          <Link className='place-order-primary-link' to='/'>Continue shopping</Link>
        </section>
      </main>
    );
  }

  if (itemsInCart.length === 0) {
    return (
      <main className='place-order-page'>
        <section className='checkout-empty'>
          <h1>Your cart is empty</h1>
          <p>Add some dishes before proceeding to checkout.</p>
          <Link className='place-order-primary-link' to='/'>Browse the menu</Link>
        </section>
      </main>
    );
  }

  return (
    <main className='place-order-page'>
      <h1>Checkout</h1>
      <form className='checkout-layout' onSubmit={placeOrder}>
        <section className='checkout-section'>
          <h2>Delivery details</h2>
          <div className='checkout-fields'>
            <label>
              Full name
              <input name='name' autoComplete='name' required />
            </label>
            <label>
              Email
              <input name='email' type='email' autoComplete='email' required />
            </label>
            <label>
              Phone
              <input name='phone' type='tel' autoComplete='tel' required />
            </label>
            <label>
              Street address
              <input name='address' autoComplete='street-address' required />
            </label>
            <label>
              City
              <input name='city' autoComplete='address-level2' required />
            </label>
            <label>
              Postal code
              <input name='postalCode' autoComplete='postal-code' required />
            </label>
          </div>

          <fieldset className='payment-options'>
            <legend>Payment method</legend>
            <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
              <input
                type='radio'
                name='paymentMethod'
                value='card'
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <span><strong>Card (demo)</strong><small>Simulated payment; no card details needed</small></span>
            </label>
            <label className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}>
              <input
                type='radio'
                name='paymentMethod'
                value='cash'
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
              />
              <span><strong>Cash on delivery</strong><small>Pay when your order arrives</small></span>
            </label>
          </fieldset>
        </section>

        <aside className='checkout-summary'>
          <h2>Your order</h2>
          <div className='checkout-order-items'>
            {itemsInCart.map((item) => (
              <div className='checkout-summary-row' key={item._id}>
                <span>{item.name} × {cartItems[item._id]}</span>
                <span>${(item.price * cartItems[item._id]).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className='checkout-summary-row'>
            <span>Subtotal</span><span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className='checkout-summary-row'>
            <span>Delivery</span><span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className='checkout-summary-total'>
            <span>Total</span><span>${(cartTotal + deliveryFee).toFixed(2)}</span>
          </div>
          <button className='place-order-submit' type='submit'>Place demo order</button>
          <p className='demo-notice'>Demo only — no real payment will be taken.</p>
          <Link className='checkout-back-link' to='/cart'>Back to cart</Link>
        </aside>
      </form>
    </main>
  );
};

export default PlaceOrder;
