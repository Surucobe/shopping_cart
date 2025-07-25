const shortenedTitle = (title) => {
    if (title.length > 20) {
      return title.substring(0, 17) + '...';
    }
    return title;
  }

const ItemShop = ({inventory, cart, func}) => {

  return(
    <div className="shop">
          {inventory.map(item => (
            <div key={item.id} className='shop_item'>
              <img src={item.image} alt="" />
              <h3>{shortenedTitle(item.title)}</h3>
              <h3>In cart: {
                  cart.some(elm => elm.id === item.id) ? 
                  cart.find(elm => elm.id == item.id).quantity 
                  : '0'
                }</h3>
              <div className="item_info">
                <div>
                  <h3>{item.category}</h3>
                  <h3>{item.price} $</h3>
                </div>
                <button onClick={() => func(item)}>
                +
                </button>
              </div>
            </div>
          ))}
    </div>
  )
}

export default ItemShop