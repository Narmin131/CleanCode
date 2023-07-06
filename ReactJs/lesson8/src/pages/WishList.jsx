import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import SingleCard from '../components/SingleCard'
const WishList = () => {
  const { items, setWishlistItems } = useWishlist()

  const array = [
    {
      id: 1,
      name: 'Narmin'
    },
    {
      id: 1,
      name: 'Narmin'
    },
    {
      id: 2,
      name: 'Simran'
    },
    {
      id: 2,
      name: 'Simran'
    }
  ]


  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
              items.map((item) => {
                return <SingleCard product={item} key={item.id} />
              })
            }
          </div>
        </div>
        <button onClick={() => setWishlistItems([])}>Clear All Wishlist</button>
      </section>
    </>
  )
}

export default WishList