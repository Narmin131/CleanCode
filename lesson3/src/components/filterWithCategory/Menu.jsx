import React from 'react'
import SingleItem from './SingleItem'
const Menu = ({ menu }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
              menu.map((item, index) => {
                return <SingleItem menuSingleItem={item}/>
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu