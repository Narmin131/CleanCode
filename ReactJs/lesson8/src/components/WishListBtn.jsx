import React from 'react'
import { useWishlist } from 'react-use-wishlist'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
const WishListBtn = ({ product }) => {

    const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist()

    const toggleWishlistFunc = (myItem) => {
        if (inWishlist(myItem.id)) {
            removeWishlistItem(myItem.id)
        }
        else {
            addWishlistItem(myItem)
        }
    }
    return (
        <>
            <button className='btn btn-primary m-2' onClick={() => toggleWishlistFunc(product)}>
                {
                    inWishlist(product.id) ? <AiFillHeart/> : <AiOutlineHeart/>
                }
            </button>
        </>
    )
}

export default WishListBtn