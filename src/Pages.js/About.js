import React from 'react'
import Cards from '../Component.js/Cards'

const About = (props) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <h3>ABOUT EXIDE</h3>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div style={{ borderBottom: "2px solid red" }}></div>
          </div>
        </div>
      </div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src="Images/exide3.jpg" className='img-fluid' alt=" "></img>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg-3'>
            <Cards a="BEING EXIDE" b="Images/exide4.jpg"/>
          </div>
          <div className='col-lg-3'>
            <Cards a="QUALITY" b="Images/quality.jpg" />
          </div>
          <div className='col-lg-3'>
            <Cards a="MANUFACTURING STRENGTH"  b="Images/mfc.jpg" />
          </div>
          <div className='col-lg-3'>
            <Cards a="RESEARCH AND DEVELOPMENT"  b="Images/about4.jpg"/>
          </div>
        </div>
      </div>

    </>
  )
}

export default About
