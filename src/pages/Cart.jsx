import { useOutletContext } from 'react-router-dom';

import ItemCart from '../components/CartItem';

import '../styles/Cart.css';

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
        <ItemCart
          cartItems={cartItems}
          reduceAmount={reduceAmount}
          addToCart={addToCart}
          removeItem={removeItem}
        />
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