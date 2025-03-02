import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from "styled-components";

function Home() {
  {/*Get the current location of the page*/ }
const location = useLocation();

  {/*Testing styled-components for input here I could also use style inline*/ }
const SearchInput = styled.input` 
    padding: 10px;
    padding-left: 35px;
    border: 1px solid transparent;
    border-radius: 0.6rem;
    font-size: 0.8rem;
    background-color: #f0f0f0;
    width: 280px;
    background-image: url('./src/assets/search.svg'); 
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 10px;
        
    &::placeholder {
        font-size: 1rem;
        color: #000000;
    }

    &:focus {
        border: 2px solid rgb(0, 0, 0);
        outline: none;
    }

    @media (max-width: 768px) {
        width: 240px;
        font-size: 0.7rem;
    }
`

const Icons = styled.li`
    display:flex;
    justify-content: center;
    margin-left: 15px;

    @media (max-width: 768px) {
        border: solid rgba(206, 206, 206, 0.79) 1px;
        margin-left: 0px;

    @media (min-width: 769px) {
        border: none;
    }
`

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="navbar navbar-expand-lg bg-light px-lg-5 p-0 shadow-sm align-items-center">
        <div className="container-fluid justify-content-start">
          <img src="./src/assets/logo.svg" alt="Logo" className="img-fluid" style={{ maxHeight: "50px" }} />
          <SearchInput
            type="search"
            placeholder="Pesquisar"
            className="mx-2"
          />
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ outline: "none"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto my-0">
            <Icons>
              {/*Using the react-router-dom link*/}
              <Link
                to="/Home"
                className= {`nav-link ${location.pathname === "Home" ? "active" : "p-0 my-1"}`}
              >
                <i className="bi bi-house-door text fs-2"></i>
              </Link>
            </Icons>
            <Icons>
              <Link
                to="/Profile"
                className={`nav-link ${location.pathname === "Profile" ? "active" : "p-0 my-1"}`}
              >
                <i className="bi bi-file-earmark-post text fs-2"></i>
              </Link>
            </Icons>
            <Icons>
              <Link
                to="/Notifications"
                className={`nav-link ${location.pathname === "Notifications" ? "active" : "p-0 my-1"}`}
              >
                <i className="bi bi-bell text fs-2"></i>
              </Link>
            </Icons>
            <Icons>
              <Link
                to="/Login"
                className={`nav-link ${location.pathname === "/login" ? "active" : "p-0 my-1"}`}
              >
                <i className="bi bi-person-circle text fs-2"></i>
              </Link>
            </Icons>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;