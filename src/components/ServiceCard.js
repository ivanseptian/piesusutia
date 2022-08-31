import React from 'react'

const ServiceCard = ({title, desc, image}) => {
  return (
    <div className="service-item">
        <div className="service-img mx-auto">
            <img className="rounded-circle w-100 h-100 bg-light p-3" src={image} style={{objectFit: "cover"}} />
        </div>
        <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop: "-75px"}}>
            <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">{title}</h5>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ServiceCard