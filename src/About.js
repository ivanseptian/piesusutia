import React from 'react'
import about from './images/about.jpg'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="jumbotron jumbotron-fluid page-header" style={{marginBottom: "90px"}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">About</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link to="/" className="text-white">Home</Link></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">About</p>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <h1 className="section-title position-relative text-center mb-5">Traditional & Delicious Ice Cream Since 1950</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 py-5">
                    <h4 className="font-weight-bold mb-3">About Us</h4>
                    <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                    <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                </div>
                <div className="col-lg-4" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100 rounded overflow-hidden">
                        <img className="position-absolute w-100 h-100" src={about} style={{objectFit: "cover"}} />
                    </div>
                </div>
                <div className="col-lg-4 py-5">
                    <h4 className="font-weight-bold mb-3">Our Features</h4>
                    <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                    <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                    <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About