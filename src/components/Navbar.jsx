import { Link } from "react-router-dom";

import "../styles/Navbar.css";


const Navbar = (prop) => {
  const cart = prop.cart

  return(
    <div className="navbar">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'shop'}>Shop</Link>
        </li>
        {
          cart.length > 0 ? (
            <li>
              <Link to={'cart'}>Cart ({cart.length})</Link>
            </li>
          ) : (
            <li>
              <Link to={'cart'}>Cart (0)</Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Navbar