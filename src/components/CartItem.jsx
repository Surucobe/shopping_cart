const ItemCart = ({cartItems, reduceAmount, addToCart, removeItem}) => {
  
  return (
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
  )
}

export default ItemCart;