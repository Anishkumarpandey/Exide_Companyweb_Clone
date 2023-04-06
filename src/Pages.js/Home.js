import React from 'react'
import Footer from '../Component.js/Footer'
import Section from '../Component.js/Section'
import About from './About'
import Product from './Product'
const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="Images/exide1.png" className="d-block w-100" style={{height:"340px"}} alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="Images/exide2.jpg" className="d-block w-100"style={{height:"340px"}} alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="Images/exidelogo.jpg" className="d-block w-100"style={{height:"340px"}} alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section/>
      <About/>
      <Product/>
      <Footer/>
    </>
  )
}

export default Home
