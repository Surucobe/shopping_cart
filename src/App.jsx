import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import "./App.css";

//API call to get items
async function getItems(callback) {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  callback(
    data.map(item => {
      return {...item, quantity: 0}
    })
  );
}

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [cart, setNewItem] = useState([]);

  const addToCart = (item) => {
    if (cart.some(elm => elm.id === item.id)) {
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setNewItem(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setNewItem([...cart, newItem]);
    }
  }

  const removeFromCart = (item) => {
    const newCart = cart.filter(cartItem => cartItem.id !== item.id)
    setNewItem(newCart)
  }

  const reduceAmount = (item) => {
    const updatedCart = cart.map(cartItem => {
      if(cartItem.id === item.id){
        return {...cartItem, quantity:  cartItem.quantity - 1}
      }
      return cartItem
    }).filter(cartItem => cartItem.quantity > 0)

    setNewItem(updatedCart)
  }

  const clearCart = () => setNewItem([])

  const appContext = {
    inventory: inventory,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    reduceAmount: reduceAmount,
    clearCart: clearCart,
    cart: cart
  }

  useEffect(() => {
    getItems(setInventory)
  }, []);

  useEffect(() => {}, [cart]);

  return (
    <>
      <Navbar 
        cart= {cart}
      />
      <Outlet 
        context={appContext}
      />
    </>
  );
}

export default App;