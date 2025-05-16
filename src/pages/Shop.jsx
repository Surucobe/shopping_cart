import { useOutletContext } from "react-router-dom";

import nothingToSee from '../assets/nothing_to_see.jpg'

import '../styles/shop.css';

const Shop = () => {
  const cart = useOutletContext().cart
  const inventory = useOutletContext().inventory;
  const addToCart = useOutletContext().addToCart;

  return(
    <>
      {inventory.length === 0 ? (
        <img src={nothingToSee} alt="Yeeeeeah... nothing to see here yet" />
      ) : (
        <div className="shop">
          {inventory.map(item => (
            <div key={item.id} className='shop_item'>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <h3>In cart: {
                  cart.some(elm => elm.id === item.id) ? 
                  cart.find(elm => elm.id == item.id).quantity 
                  : 'no'
                }</h3>
              <div className="item_info">
                <div>
                  <h3>{item.category}</h3>
                  <h3>{item.price} $</h3>
                </div>
                <button onClick={() => addToCart(item)}>
                +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Shop