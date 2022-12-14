import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <div className='Register'>
       <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div
          className="card shadow-2-strong card-registration"
          style={{ borderRadius: 15 }}
        >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="firstName"
                      className="form-control form-control-lg"
                      placeholder='First Name'
                    />
                    
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="lastName"
                      className="form-control form-control-lg"
                      placeholder='lastName'
                    />
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                   
                    <input
                      type="Text"
                      className="form-control form-control-lg"
                      id="username"
                      placeholder='UserName'
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <h6 className="mb-2 pb-1">Gender: </h6>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input
                      type="email"
                      id="emailAddress"
                      className="form-control form-control-lg"
                      placeholder='Email'
                    />
                    
                    
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input
                      type="Password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder='Password'
                    />
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  
                  
                </div>
              </div>
              <div className="mt-4 pt-2">
                <input
                  className="btn btn-primary btn-lg"
                  type="submit"
                  defaultValue="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
