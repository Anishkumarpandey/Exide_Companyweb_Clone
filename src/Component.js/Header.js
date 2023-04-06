import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src="Images/logo1.png" style={{width:"220px"}} class="img-fluid" alt="..."/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="About">About</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="Product">Product</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="Investors">
                  Investors
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="Contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
