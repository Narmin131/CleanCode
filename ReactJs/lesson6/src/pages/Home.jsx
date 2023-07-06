import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SingleCard from '../components/SingleCard'
import { useCart } from 'react-use-cart'
const Home = () => {

  const { data } = useContext(GlobalContext)

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
              data.map((item, index) => {
                return <SingleCard product={item} key={index} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home