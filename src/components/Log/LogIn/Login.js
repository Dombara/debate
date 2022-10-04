import React from 'react';
import './Login.css';

export default function Login() {
  return (
   
        <div className='Login'>
       <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-sm-4 ">
        <div
          className="card shadow-2-strong card-registration"
          style={{ borderRadius: 15 }}
        >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
            <form>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="username"
                      className="form-control form-control-lg"
                      placeholder='UserName'
                    />
                <br /><br />
                    
                  </div>
                </div>
                
              </div>
              
              <div className="row">
                
                <div className="col-sm-12 ">
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
