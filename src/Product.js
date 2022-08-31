import React from 'react'
import ProductCard from './components/ProductCard'

const Product = ({products}) => {
  return (
    <>
    <div className="jumbotron jumbotron-fluid page-header" style={{marginBottom: "90px"}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">Product</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><a className="text-white" href="">Home</a></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">Product</p>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1 className="section-title position-relative text-center mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                </div>
            </div>
            <div className="row">
                {products.map(product => (
                  <ProductCard price={product.price} name={product.name} image={product.image} />
                ))}
                <div className="col-12 text-center">
                    <a href="" className="btn btn-primary py-3 px-5">Load More</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product