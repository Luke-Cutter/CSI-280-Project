import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './Login.css'

export default function Login() {
  return (
    <MDBContainer className="my-5 gradient-form">

    <MDBRow>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column ms-5">

          <div className="text-center">
            <img className="logo" src="\vhlogofinal.svg"
              style={{width: '185px'}} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">We are The Volunteer Helpers Team</h4>
          </div>

          <p>Please login to your account</p>


          <MDBInput wrapperClass='mb-4' label=' Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label=' Password' id='form2' type='password'/>


          <div className="text-center pt-1 mb-5 pb-1">
            <button className="gradient-custom-2">Sign in</button>
            <a className="text-muted" href="/forgot-password">  Forgot password?</a>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Don't have an account?</p>
            <button>
              Create Account
            </button>
          </div>

        </div>

      </MDBCol>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

          <div className="text-white px-3 py-4 p-md-5 mx-md-4">
            <h4 class="mb-4">We are more than just a company</h4>
            <p class="small mb-0">Our mission at Volunteer Helpers is to empower individuals and communities 
            to create positive change through volunteerism and acts of kindness. We believe in the 
            transformative power of service to uplift lives, foster empathy, and build stronger, more 
            compassionate communities. With a commitment to inclusivity and collaboration, we strive to 
            inspire and mobilize people from all walks of life to join us in making a meaningful 
            difference in the world.
            </p>
          </div>

        </div>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  );
};

{/*
     <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
  
                  <div class="text-center">
                    <img src="public\vhlogofinal.svg"
                      style="width: 185px;" alt="logo"/>
                    <h4 class="mt-1 mb-5 pb-1">We are The Volunteer Helpers Team</h4>
                  </div>
  
                  <form>
                    <p>Please login to your account</p>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input type="email" id="form2Example11" class="form-control"
                        placeholder="Phone number or email address" />
                      <label class="form-label" for="form2Example11">Username</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input type="password" id="form2Example22" class="form-control" />
                      <label class="form-label" for="form2Example22">Password</label>
                    </div>
  
                    <div class="text-center pt-1 mb-5 pb-1">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                        in</button>
                      <a class="text-muted" href="/forgot-password">Forgot password?</a>
                    </div>
  
                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-danger">Create new</button>
                    </div>
  
                  </form>
  
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">Our mission at Volunteer Helpers is to empower individuals and communities 
              to create positive change through volunteerism and acts of kindness. We believe in the 
              transformative power of service to uplift lives, foster empathy, and build stronger, more 
              compassionate communities. With a commitment to inclusivity and collaboration, we strive to 
              inspire and mobilize people from all walks of life to join us in making a meaningful 
              difference in the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}