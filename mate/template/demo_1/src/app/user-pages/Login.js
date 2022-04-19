import React, { Component, useEffect, useState } from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Axios from "axios";
import { Form } from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";

export default function Login (){

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");

  // Axios.defaults.withCredentials = true;

  // const login = () => {
  //   Axios.post("http://localhost:3001/login", {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });
  // }, []);


  // console.log("bleh");


    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    const [responseStatus, setCurrStatus] = useState(""); 

    Axios.defaults.withCredentials = true;

    const register = () => {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
        fname: "MiloniTest",
        lname:"MILONITEST",
      }).then((response) => {
        console.log(response);
      });
    };

    
    // let navigate = useNavigate();
    let history = useHistory();

    const login = () => {
      
      
      // setStatus(1000);
      // alert("login called");
      fetch("http://localhost:3001/auth/login", {
        method: 'POST',
        username: username,
        password: password,
      }).then((response) => {
        return response.json() 
     }).then((responseData) => {
        // console.log(responseData);
        var temp = responseData.currstatus;
        alert(temp);
        setCurrStatus(temp);
        alert(responseStatus);

        if(responseStatus == 400){
          setLoginStatus(responseData.message)
        }

        
        return responseData;

      });
      
      
      // .then((response) => {
        
      //   console.log("login called got response");
      //   console.log(response.json());
      //   alert(response.body.message);
      //   // if(response.data.message){
      //   //   setLoginStatus(response.data.message)
      //   // }
      //   // else{
      //   //   // navigate("/dashboard");
      //   //   setLoginStatus(response.data[0].first_name)
      //   // }
      // });
    };

    // useEffect(() => {
    //   Axios.get("http://localhost:3001/login").then((response) => {
    //     console.log(response);  
    //   if (response.data.loggedIn === true) {
    //       // return <Redirect to='/dashboard' />
    //       history.push('/dashboard');
    //       // navigate("/dashboard");
    //       setLoginStatus(response.data.user[0].first_name);
    //     }
    //   });
    // }, []);

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <center><img src={require("../../assets/images/logo2.png")} alt="logo" /></center>
                </div>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" onChange={(e) => {setUsername(e.target.value);}}/>
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" onChange={(e) => {setPassword(e.target.value);}}/>
                  </Form.Group>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  onClick={login}>SIGN IN</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Dont have an account? <Link to="/user-pages/register-1" className="text-primary">Register</Link>
                  </div>
                </Form>
              </div>
               <h1>{loginStatus}</h1>
            </div>
          </div>
        </div>
      </div>
    )

}
