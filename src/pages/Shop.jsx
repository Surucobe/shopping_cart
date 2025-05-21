import { useOutletContext } from "react-router-dom";

import ItemShop from "../components/Item";

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
        <ItemShop 
          inventory = {inventory}
          cart = {cart}
          func = {addToCart}
        />
      )}
    </>
  )
}

export default Shop