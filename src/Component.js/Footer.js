import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
      <div className='container-fluid mt-3 bg-dark'>
        <div className='row'>
          <div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
            <h5 className='text-white mt-3'>Exide Industries</h5>
            <div className='mt-4'>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>About Us</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Our Services</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Privacy Policy</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Products</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Investors</p></a>
            </div>
          </div>
          <div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
            <h5 className='text-white mt-3'>Get Help</h5>
            <div className='mt-4'>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>FAQ</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Shipping</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Returns</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Order Status</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Payment Options</p></a>
            </div>
          </div>
          <div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
            <h5 className='text-white mt-3'>Online Shop</h5>
            <div className='mt-4'>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>About Us</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Our Services</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Privacy Policy</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Products</p></a>
              <a href='#' style={{ textDecoration: "none" }}><p className='text-light'>Investors</p></a>
            </div>
          </div>
          <div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
            <h5 className='text-white mt-3'>Follow Us</h5>
            <div className='mt-4'>
              <Link to="#" style={{ color: "white" }} className="px-3">
                <TwitterIcon />
              </Link>
              <Link to="#" style={{ color: "white" }} className="px-3">
                <FacebookIcon />
              </Link>
              <Link to="#" style={{ color: "white" }} className="px-3">
                <WhatsAppIcon />
              </Link>
              <Link to="#" style={{ color: "white" }} className="px-3">
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
