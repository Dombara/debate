import React from 'react';
import './Register.css';
import Login from '../LogIn/Login';
import { useState } from 'react';
import { BrowserRouter,Route, Routes, useNavigate } from 'react-router-dom';


export default function Register() {
  
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    username: "",
    gender: "",
    email: "",
    password: ""
  })
  
  // Handle Inputs
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setuser({ ...user, [name]: value });
    console.log(name, ' : ', value);
  }
  
  // Handle Form
  const navigate = useNavigate();
  async function handleForm (e)  {
    e.preventDefault();
    const { username, email, password } = user;
    try {
      const res = await fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username, email, password
        })
      })

      if (res.status === 400  || !res) {
        window.alert("Already Used Details");
      }else{
        window.alert("Registered successfully");
        navigate('/login');
      }


    } catch (error) {
      console.log(error);
    }
  }

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


                  <form onSubmit={handleForm} method='POST' >


                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder='First Name'
                            name='fname'
                            value={user.fname}
                            onChange={handleInput}
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
                            name='lname'
                            value={user.lname}
                            onChange={handleInput}
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
                            name='username'
                            value={user.username}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"

                            id="femaleGender"
                            value="female"
                            name='gender'
                            onChange={handleInput}
                          />
                          <label className="form-check-label" htmlFor="femaleGender">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="maleGender"
                            value="male"
                            onChange={handleInput}
                          />
                          <label className="form-check-label" htmlFor="maleGender">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="otherGender"
                            value="other"
                            onChange={handleInput}

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
                            name='email'
                            value={user.email}
                            onChange={handleInput}
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
                            name='password'
                            value={user.password}
                            onChange={handleInput}
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
 