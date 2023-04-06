import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className=" col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <h1
              className="text-center"
              style={{ fontSize: "60px", color: "red" }}
            >
              Contact us
            </h1>
            <p className="text-center">
              Got a question? we'd love to here you.Send us message
              <br /> and we will respond as soon as possible
            </p>
             <form className="justify-content-center" > 
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email address" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="my-5 text-center">
                <input type="button" class="button" value="Send Message"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
