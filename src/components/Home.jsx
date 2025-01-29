import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from "styled-components";

function Home() {
  {/*Get the current location of the page*/}
  const location = useLocation();

  {/*Testing styled-components for input here I could also use style inline*/}
  const SearchInput = styled.input` 
    padding: 10px;
    padding-left: 35px;
    border: 1px solid transparent;
    border-radius: 0.6rem;
    font-size: 0.8rem;
    background-color: #f0f0f0;
    width: 280px;
    background-image: url('./src/assets/search.svg'); /* Caminho para o ícone */
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
  `;

  const Navbar = styled.nav`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombrinha */
  `;
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="navbar navbar-expand-lg bg-light px-5">
        <div className="container-fluid justify-content-start">
          <img src="./src/assets/logo.svg" alt="Logo" className="mr-2" />
          <SearchInput
            type="search"
            placeholder="Pesquisar"
            className="mx-2"
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/*Using the react-router-dom link*/}
              <Link
                to="#" 
                className={`nav-link ${location.pathname === "#" ? "active" : ""}`}
              >
                <i className="bi bi-house-door text fs-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#"
                className={`nav-link ${location.pathname === "#" ? "active" : ""}`}
              >
                <i className="bi bi-file-earmark-post text fs-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#"
                className={`nav-link ${location.pathname === "#" ? "active" : ""}`}
              >
                <i className="bi bi-bell text fs-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#"
                className={`nav-link ${location.pathname === "#" ? "active" : ""}`}
              >
                <i className="bi bi-person-circle text fs-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Home;
