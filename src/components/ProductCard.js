import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({price, name, image}) => {
  return (
    <div className="col-sm-4 product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
        <div className="bg-primary mt-n5 py-3" style={{width: "80px"}}>
            <h4 className="font-weight-bold text-white mb-0">{price}</h4>
        </div>
        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{width: "150px", height: "150px"}}>
            <img className="rounded-circle w-100 h-100" src={image} style={{objectFit: "cover"}} alt="pie susu tia" />
        </div>
        <h5 className="font-weight-bold mb-4">{name}</h5>
        <a href="/" className="btn btn-sm btn-secondary">Order Now</a>
    </div>
  )
}

export default ProductCard