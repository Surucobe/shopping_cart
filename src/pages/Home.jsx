import { useOutletContext } from "react-router-dom"

const Home = () => {
  const inventory = useOutletContext().inventory;

  const createTrendingItem = () => {
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

  const trendingItems = createTrendingItem();

  console.log(trendingItems);

  return(
    <>
      <h1>Welcome to our store</h1>

      <div className="highlight">
        <h3>Trending now</h3>

        <div className="trending_items">
          {/* Map through your trending items here */}
        </div>
      </div>
    </>
  )
}

export default Home