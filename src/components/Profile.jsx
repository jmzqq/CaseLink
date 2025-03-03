import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from "styled-components";

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


const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProfileSidebar = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileContent = styled.div`
  flex: 2;
  min-width: 500px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProfileIcon = styled.i`
  font-size: 3rem;
  color: #666;
`;

const Section = styled.div`
  background: #ffffff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h5`
  margin-bottom: 15px;
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const InputIcon = styled.i`
  margin-right: 10px;
  color: #666;
  font-size: 1.2rem;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex-grow: 1;
  font-size: 1rem;
`;

const EditButton = styled.button`
  background-color: #386A3F;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  width: 100%;

  &:hover {
    background-color: #2e5634;
  }
`;

function Profile() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="navbar navbar-expand-lg bg-light px-lg-5 p-0 shadow-sm">
        <div className="container-fluid justify-content-start">
          <img src="./src/assets/logo.svg" alt="Logo" className="img-fluid" style={{ maxHeight: "50px" }} />
          <SearchInput
            type="search"
            placeholder="Pesquisar"
            className="mx-2"
          />
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ outline: "none" }}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto my-0">
            <Icons>
              {/*Using the react-router-dom link*/}
              <Link
                to="/Home"
                className={`nav-link ${location.pathname === "Home" ? "active" : "p-0 my-1"}`}
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
                to="/login"
                className={`nav-link ${location.pathname === "Login" ? "active" : "p-0 my-1"}`}
              >
                <i className="bi bi-person-circle text fs-2"></i>
              </Link>
            </Icons>
          </ul>
        </div>
      </div>

      <ProfileContainer>
        <ProfileSidebar>
          <ProfileHeader>
            <ProfileIcon className="bi bi-person-circle" />
            <div>
              <h4>Usúario</h4>
              <p>Cargo | Empresa</p>
            </div>
          </ProfileHeader>
        </ProfileSidebar>

        <ProfileContent>
          <Section>
            <SectionTitle>Informações Pessoais</SectionTitle>
            <InputGroup>
              <InputIcon className="bi bi-person" />
              <InputField type="text" placeholder="Nome Completo" />
            </InputGroup>
            <InputGroup>
              <InputIcon className="bi bi-envelope" />
              <InputField type="email" placeholder="E-mail" />
            </InputGroup>
            <InputGroup>
              <InputIcon className="bi bi-telephone" />
              <InputField type="text" placeholder="Telefone" />
            </InputGroup>
          </Section>

          <Section>
            <SectionTitle>Experiência Profissional</SectionTitle>
            <InputGroup>
              <InputIcon className="bi bi-briefcase" />
              <InputField type="text" placeholder="Última Empresa" />
            </InputGroup>
            <InputGroup>
              <InputIcon className="bi bi-calendar" />
              <InputField type="text" placeholder="Período" />
            </InputGroup>
          </Section>

          <EditButton>Salvar Alterações</EditButton>
        </ProfileContent>
      </ProfileContainer>
    </div>
  );
}

export default Profile;
