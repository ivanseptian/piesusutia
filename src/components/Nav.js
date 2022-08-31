import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({logo}) => {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: 9}}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                <a href="/" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#product" className="nav-item nav-link">Product</a>
                    </div>
                    <a href="/" className="navbar-brand mx-5 d-none d-lg-block">
                        <img src={logo} alt="pie susu tia" />
                        {/* <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1> */}
                    </a>
                    <div className="navbar-nav mr-auto py-0">
                        <a href="#service" className="nav-item nav-link">Service</a>
                        <a href="#gallery" className="nav-item nav-link">Gallery</a>
                        <a href="#footer" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Nav