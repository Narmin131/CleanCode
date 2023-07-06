import React from 'react'

const SingleItem = ({ menuSingleItem }) => {
  return (
    <>
      <div className="col-lg-3 p-2">
        <div className="card" style={{ width: '100%', height: "100%" }}>
          <img src={menuSingleItem.img} className="card-img-top" alt="..." style={{width:"100%", height:'300px', objectFit:'cover'}} />
          <div className="card-body">
            <h5 className="card-title">{menuSingleItem.title}</h5>
            <p className="card-text">{menuSingleItem.desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleItem