import { useOutletContext } from 'react-router-dom';

import '../styles/shop.css';
import '../styles/cart.css';

import emptyCart from '../assets/empty-cart.png';

const Cart = () => {
  const cartItems = useOutletContext().cart;
  const removeItem = useOutletContext().removeFromCart;
  const reduceAmount = useOutletContext().reduceAmount;
  const addToCart = useOutletContext().addToCart;
  const clearCart = useOutletContext(). clearCart;

  return (
    <div className='cart'>
      {cartItems.length > 0 ? (
        <div className='shop'>
          {cartItems.map(item => (
            <div key={item.id} className='cart_item'>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <div className="item_info">
                <div>
                  <h3>{item.category}</h3>
                  <h3>{item.price} $</h3>
                  <h3>In cart: {item.quantity}</h3>
                </div>
                <div className='cart_buttons'>
                  <button onClick={() => reduceAmount(item)}>
                  -
                  </button>
                  <button onClick={() => addToCart(item)}>
                  +
                  </button>
                </div>
              </div>
              <span className='remove'
                onClick={() => removeItem(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      ):(
        <div className='empty_cart'>
          <h1>Shopping Cart</h1>
          <p>Your cart is empty.</p>
          <img src={emptyCart} alt="cart is empty" />
        </div>
      )}
      <div className='sidebar'>
        <button onClick={() => alert('Not implemented yet')}>
          Checkout
        </button>

        <button onClick={() => clearCart()}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Cart;