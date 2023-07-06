import React from 'react'

const SingleCard = ({ podcast }) => {
    return (
        <>
          <div className="col-lg-4 p-2" data-aos="flip-left">
          <div className="card" style={{ width: '100%', height:'100%' }}>
                <img src={podcast.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{podcast.title}</h5>
                    <p className="card-text">{podcast.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        </>
    )
}

export default SingleCard