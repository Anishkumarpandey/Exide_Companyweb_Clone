import React from "react";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const Product = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <img src="Images/car5.jpg" class="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
            <h3>EXIDE PRODUCT</h3>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div style={{ borderBottom: "2px solid red" }}></div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h5 className="text-center" style={{ color: "blue" }}>
              FOUR WHEELER BATTERIES
            </h5>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-2">
            <div class="card" style={{ width: "18rem" }}>
              <p
                class="card-text text-center mt-3"
                style={{ fontWeight: "bold" }}
              >
                EXIDE Milege RED
              </p>
              <img
                src="Images/car1.jpg"
                class="card-img-top"
                style={{ height: "200px" }}
                alt="..."
              />
              <div class="card-body">
                <p
                  class="card-text text-center"
                  style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
                >
                  77 Month Warranty*
                </p>
                <p class="card-text text-center" style={{ fontWeight: "bold" }}>
                  (42 FOC + 35 Pro-rata)
                </p>
                <p className="text-center mt-4">
                  <a href="#" style={{ color: "red", textDecoration: "none" }}>
                    * T&C Apply
                  </a>
                </p>
                <p className="text-center">Segment: Car & SUV</p>
                <Link to="#" className="d-flex justify-content-center ">
                  <ArrowCircleRightIcon
                    style={{ color: "red", fontSize: "50px" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-3">
            <div class="card" style={{ width: "18rem" }}>
              <p
                class="card-text text-center mt-3"
                style={{ fontWeight: "bold" }}
              >
                EXIDE Drive
              </p>
              <img
                src="Images/car2.jpg"
                class="card-img-top"
                style={{ height: "200px" }}
                alt="..."
              />
              <div class="card-body">
                <p
                  class="card-text text-center"
                  style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
                >
                  66 Month Warranty*
                </p>
                <p class="card-text text-center" style={{ fontWeight: "bold" }}>
                  (36 FOC + 30 Pro-rata)
                </p>
                <p className="text-center mt-4">
                  <a href="#" style={{ color: "red", textDecoration: "none" }}>
                    * T&C Apply
                  </a>
                </p>
                <p className="text-center">Segment: Car & SUV</p>
                <Link to="#" className="d-flex justify-content-center ">
                  <ArrowCircleRightIcon
                    style={{ color: "red", fontSize: "50px" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-3">
            <div class="card" style={{ width: "18rem" }}>
              <p
                class="card-text text-center mt-3"
                style={{ fontWeight: "bold" }}
              >
                EXIDE MATRIX
              </p>
              <img
                src="Images/car3.jpg"
                class="card-img-top"
                style={{ height: "200px" }}
                alt="..."
              />
              <div class="card-body">
                <p
                  class="card-text text-center"
                  style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
                >
                  55 Month Warranty*
                </p>
                <p class="card-text text-center" style={{ fontWeight: "bold" }}>
                  (30 FOC + 25 Pro-rata)
                </p>
                <p className="text-center mt-4">
                  <a href="#" style={{ color: "red", textDecoration: "none" }}>
                    * T&C Apply
                  </a>
                </p>
                <p className="text-center">Segment: Car & SUV</p>
                <Link to="#" className="d-flex justify-content-center ">
                  <ArrowCircleRightIcon
                    style={{ color: "red", fontSize: "50px" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-3">
            <div class="card" style={{ width: "18rem" }}>
              <p
                class="card-text text-center mt-3"
                style={{ fontWeight: "bold" }}
              >
                EXIDE EXPRESS
              </p>
              <img
                src="Images/car4.jpg"
                class="card-img-top"
                style={{ height: "200px" }}
                alt="..."
              />
              <div class="card-body">
                <p
                  class="card-text text-center"
                  style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
                >
                  44 Month Warranty*
                </p>
                <p class="card-text text-center" style={{ fontWeight: "bold" }}>
                  (48 FOC + 40 Pro-rata)
                </p>
                <p className="text-center mt-4">
                  <a href="#" style={{ color: "red", textDecoration: "none" }}>
                    * T&C Apply
                  </a>
                </p>
                <p className="text-center">Segment: heavy duty vehicle</p>
                <Link to="#" className="d-flex justify-content-center ">
                  <ArrowCircleRightIcon
                    style={{ color: "red", fontSize: "50px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h5 className="text-center" style={{ color: "blue" }}>
              Two WHEELER BATTERIES
            </h5>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="Images/bike1.jpg" class="card-img-top" style={{ height: "200px" }} alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="Images/bike2.jpg" class="card-img-top" style={{ height: "200px" }} alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="Images/bike3.jpg" class="card-img-top" style={{ height: "200px" }} alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-around mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="Images/bike4.jpg" class="card-img-top" style={{ height: "200px" }} alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
