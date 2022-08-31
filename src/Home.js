import React from 'react'
import Carousel from './images/carousel-1.jpg'
import about from './images/about.jpg'
import promotion from './images/promotion.jpg'
import portofolio1 from './images/portfolio-1.jpg'
import portofolio2 from './images/portfolio-2.jpg'
import portofolio3 from './images/portfolio-3.jpg'
import portofolio4 from './images/portfolio-4.jpg'
import portofolio5 from './images/portfolio-5.jpg'
import portofolio6 from './images/portfolio-6.jpg'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ProductCard from './components/ProductCard'
import ServiceCard from './components/ServiceCard'

const Home = ({products, services}) => {
  return (
    <>
    <div className="container-fluid p-0 mb-5 pb-5" id='slider'>
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={Carousel} alt="slider pie" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">Traditional & Delicious</h4>
                            <h1 className="display-3 text-white mb-md-4">Traditional Ice Cream Since 1950</h1>
                            <a href="/" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5" id='about'>
      <div className="container py-5">
          <div className="row justify-content-center">
              <div className="col-lg-7">
                  <h1 className="section-title position-relative text-center mb-5">Pie Susu Homemade, Lezat & Sehat</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-4 py-5">
                  <h4 className="font-weight-bold mb-3">Tentang Kami</h4>
                  <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                  <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
              </div>
              <div className="col-lg-4" style={{minHeight: "400px"}}>
                  <div className="position-relative h-100 rounded overflow-hidden">
                      <img className="position-absolute w-100 h-100" src={about} style={{objectFit: "cover"}} alt="pie susu tia" />
                  </div>
              </div>
              <div className="col-lg-4 py-5">
                  <h4 className="font-weight-bold mb-3">Keunggulan Kami</h4>
                  <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                  <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                  <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                  <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
              </div>
          </div>
      </div>
    </div>
    <div className="container-fluid my-5 py-5 px-0" id='highlight'>
        <div className="row bg-primary m-0">
            <div className="col-md-6 px-0" style={{minHeight: "500px"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100" src={promotion} style={{objectFit: "cover"}} alt="pie susu tia" />
                    <button type="button" className="btn-play" data-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="col-md-6 py-5 py-md-0 px-0">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                    <div className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                        style={{width: "100px", height: "100px"}}>
                        <h3 className="font-weight-bold text-secondary mb-0">3K</h3>
                    </div>
                    <h3 className="font-weight-bold text-white mt-3 mb-4">Pie Susu Original</h3>
                    <p className="text-white mb-4">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                        justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                    <a href="/" className="btn btn-secondary py-3 px-5 mt-2">Order Now</a>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>        
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay" title="video pie"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5" id='service'>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="section-title position-relative mb-5">Pelayanan Terbaik Kami :</h1>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ReactOwlCarousel className="owl-carousel service-carousel" loop margin={10} nav responsive={{
                        0:{
                            items:1
                        },
                        576:{
                            items:1
                        },
                        768:{
                            items:2
                        },
                        992:{
                            items:3
                        }
                    }}>
                        {services.map(service => (
                            <ServiceCard key={service.id} title={service.title} desc={service.desc} image={service.image} />
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid my-5 py-5 px-0" id='gallery'>
        <div className="row justify-content-center m-0">
            <div className="col-lg-5">
                <h1 className="section-title position-relative text-center mb-5">Pie Susu Lezat Dibuat Dari Bahan Baku Yang Berkualitas Tinggi</h1>
            </div>
        </div>
        <div className="row m-0 portfolio-container">
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={portofolio1} alt="pie susu tia" />
                    <a className="portfolio-btn" href={portofolio1} data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={portofolio2} alt="pie susu tia" />
                    <a className="portfolio-btn" href={portofolio2} data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={portofolio3} alt="pie susu tia" />
                    <a className="portfolio-btn" href={portofolio3} data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={portofolio4} alt="pie susu tia" />
                    <a className="portfolio-btn" href={portofolio4} data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={portofolio5} alt="pie susu tia" />
                    <a className="portfolio-btn" href={portofolio5} data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={portofolio6} alt="pie susu tia" />
                    <a className="portfolio-btn" href={portofolio6} data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-light py-5" id='product'>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="section-title position-relative mb-5">Pilihan Terbaik Untuk Kamu Pecinta Jajanan Sehat</h1>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ReactOwlCarousel className="owl-carousel product-carousel" loop margin={10} nav responsive={{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }}>
                        {products.map(product => (
                            <ProductCard key={product.id} price={product.price} name={product.name} image={product.image} />
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5" id='testimoni'>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1 className="section-title position-relative text-center mb-5">Kata Mereka Tentang Pie Susu Tia</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <ReactOwlCarousel className="owl-carousel testimonial-carousel" loop margin={10} items={1}>
                        <div className="text-center item">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <h5 className="font-weight-bold m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="text-center item">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <h5 className="font-weight-bold m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="text-center item">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <h5 className="font-weight-bold m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Home