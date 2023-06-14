import React from 'react'
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart'
const Cart = () => {
    const { items, cartTotal, totalItems, removeItem, updateItemQuantity, setItems, isEmpty } = useCart()
    if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <>
            <section>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => (
                                    <tr>
                                        <td >{item.id}</td>
                                        <td>
                                            <img src={item.image} style={{width:'100px'}} alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        
                                        <td>{item.price * item.quantity}$</td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <span>{item.quantity}</span>
                                            <button className='btn btn-danger' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={()=>{
                                                removeItem(item.id)
                                                toast.error('Error')
                                            }}>X</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <h1>Cart Total : {cartTotal} </h1>
                    <p>{totalItems}</p>
                    <button onClick={()=>setItems([])}>Buy now</button>
                </div>
            </section>

        </>
    )
}

export default Cart