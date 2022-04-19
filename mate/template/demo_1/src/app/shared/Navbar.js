import React, { Component,useEffect,useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

import Axios from "axios";
// import React, { Component, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



 



export default function Navbar (){

   function toggleOffcanvas () {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  function toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }

      // let history = useHistory();
  const [name, setLoginStatus] = useState("");

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/login").then((response) => {
    //       console.log(response);  
    //     if (response.data.loggedIn === true) {
    //         console.log(response);
    //         var name = response.data.user[0].first_name.concat(" ", response.data.user[0].last_name);
    //         setLoginStatus(name);
    //     }
    //     else{
    //       // navigate("/registration");
    //       console.log("not logged in");
    //       // return <Redirect to="/user-pages/login-1"/>;
    //       // history.push("/user-pages/login-1")
    //     }
    //     });
    // }, []);


  // render () {
    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <Link to="/"><img src={require("../../assets/images/logo2.png")} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button className="navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" className="form-control" placeholder="Search Project" />
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <Dropdown alignRight as="li" className="nav-item d-none d-lg-block">
                <Dropdown.Toggle className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Create New Project</Trans>
                </Dropdown.Toggle>

                <Dropdown.Menu className="navbar-dropdown preview-list create-new-dropdown-menu">
                  <Dropdown.Divider />
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-file-outline text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <Link to="/user-pages/project">
                      <p className="preview-subject text-center"><Trans>New</Trans></p>
                      </Link>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Link to="/user-pages/all_projects">
                  <p className="p-3 mb-0 text-center"><Trans>See all projects</Trans></p>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            <Dropdown alignRight as="li" className="nav-item">
              <Dropdown.Toggle as="a" className="nav-link cursor-pointer no-caret">
                <div className="navbar-profile">
                  <img className="img-xs rounded-circle" src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                  <p className="mb-0 d-none d-sm-block navbar-profile-name"><Trans>{name}</Trans></p>
                  <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}  className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1"><Trans>Log Out</Trans></p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffcanvas}>
            <span className="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>
    );
  // }
}

