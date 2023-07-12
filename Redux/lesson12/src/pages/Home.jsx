import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SingleCard from '../components/SingleCard'
import Aos from 'aos';

const Home = () => {


  useEffect(() => {
    Aos.init({
      duration: 1000, 
    })
  }, [])

  const { data, setData } = useContext(GlobalContext)

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
              data.map((item, index) => {
                return <SingleCard podcast={item} key={index} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home