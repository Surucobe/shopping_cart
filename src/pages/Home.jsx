import { useOutletContext } from "react-router-dom"

import '../styles/home.css'

  const createTrendingItem = (inventory) => {
    const newArr = []

    for(let i = 0; i < 4 ; i++) {
      const randomIndex = Math.floor(Math.random() * inventory.length);
      const randomItem = inventory[randomIndex];

      if(!newArr.includes(randomItem)) {
        newArr.push(randomItem);
      }
    }

    return newArr
  }

const Home = () => {
  const inventory = useOutletContext().inventory;

  const trendingItems = createTrendingItem(inventory);

  console.log(trendingItems);

  return(
    <>
      <h1>Welcome to our store</h1>

      <div className="highlight">

        {console.log(inventory.length)}

        <div className="trending_items_container">
          {inventory.length > 0 ? (
            trendingItems.map(item => (
              <div key={item.id} className="trending_item">
                <h2>{item.title}</h2>
                <div className="image-container"
                style={{ backgroundImage: `url(${item.image})` }}
                >
                </div>
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </>
  )
}

export default Home