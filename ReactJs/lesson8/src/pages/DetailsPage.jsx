import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useParams } from 'react-router-dom'
import SingleCard from '../components/SingleCard'
const DetailsPage = () => {

    const { id } = useParams()
    const { data } = useContext(GlobalContext)

    const detailedProduct = data.find((item) => item.id.toString() === id)
    console.log(detailedProduct);



    return (
        <>
            {
                !detailedProduct ? 'wait' : <div>{detailedProduct.category} {detailedProduct.title}</div>
            }

        </>
    )
}

export default DetailsPage