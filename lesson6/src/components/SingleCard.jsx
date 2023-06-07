import React from 'react'
import { toast } from 'react-toastify'
import { useCart } from 'react-use-cart'
const SingleCard = ({ product }) => {

    const { addItem } = useCart()

    return (
        <>
            <div className="col-lg-4 p-2">
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className='btn btn-success' onClick={() => {
                            addItem(product)
                            toast.success('Success')
                        }}>Add to card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCard