import React from "react";
import { myProduct } from "../config/Types";
// { title, price }: { title: string; price: number }

// { title, price }: myProps

// { product } : myProps

// {
// product = {
//  title:'',
//  price:''
// }
// }

// ({ product }: myProduct

const SingleCard = ({ product }: myProduct) => {
  return (
    <>
      <div className="col-lg-4 p-2">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <img src={product.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
