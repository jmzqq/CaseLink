import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from "styled-components";

function Home() {
  const location = useLocation();

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
  `;

  const Icons = styled.li`
    display:flex;
    justify-content: center;
    margin-left: 15px;

    @media (max-width: 768px) {
        border: solid rgba(206, 206, 206, 0.79) 1px;
        margin-left: 0px;
    }

    @media (min-width: 769px) {
        border: none;
    }
  `;

  const NotificationBox = styled.div`
    background-color: #fff;
    padding: 30px;
    margin: 50px auto;
    border-radius: 12px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  `;

  const NotificationsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  `;

  const NotificationItem = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 15px;

    &:hover {
      background-color: #f0f0f0;
    }

    .icon {
      font-size: 1.5rem;
      color:rgb(0, 0, 0);
    }

    .text {
      flex-grow: 1;
      font-size: 1rem;
    }

    .time {
      font-size: 0.8rem;
      color: #888;
    }
  `;

  const Title = styled.h2`
    font-size: 1.5rem;
    margin-top: 0;
    text-align: left;
  `;

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="navbar navbar-expand-lg bg-light px-lg-5 p-0 shadow-sm align-items-center">
        <div className="container-fluid justify-content-start">
          <img src="./src/assets/logo.svg" alt="Logo" className="img-fluid" style={{ maxHeight: "50px" }} />
          <SearchInput type="search" placeholder="Pesquisar" className="mx-2" />
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ outline: "none"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto my-0">
            <Icons>
              <Link to="/Home" className={`nav-link ${location.pathname === "Home" ? "active" : "p-0 my-1"}`}>
                <i className="bi bi-house-door text fs-2"></i>
              </Link>
            </Icons>
            <Icons>
              <Link to="/Profile" className={`nav-link ${location.pathname === "Profile" ? "active" : "p-0 my-1"}`}>
                <i className="bi bi-file-earmark-post text fs-2"></i>
              </Link>
            </Icons>
            <Icons>
              <Link to="/Notifications" className={`nav-link ${location.pathname === "Notifications" ? "active" : "p-0 my-1"}`}>
                <i className="bi bi-bell text fs-2"></i>
              </Link>
            </Icons>
            <Icons>
              <Link to="/Login" className={`nav-link ${location.pathname === "Login" ? "active" : "p-0 my-1"}`}>
                <i className="bi bi-person-circle text fs-2"></i>
              </Link>
            </Icons>
          </ul>
        </div>
      </div>

      <section className="container">
      <NotificationBox>
          <Title>Notificações</Title>
          <NotificationsList>
            <NotificationItem>
              <i className="bi bi-briefcase-fill icon"></i>
              <div className="text"><p className="m-auto"><strong>Nova vaga disponível:</strong> Desenvolvedor Front-end em <strong>São Paulo, SP</strong></p></div>
              <div className="time">12 min</div>
            </NotificationItem>
            <NotificationItem>
              <i className="bi bi-file-earmark-text icon"></i>
              <div className="text"><p className="m-auto"><strong>Seu currículo foi visualizado</strong> por uma empresa.</p></div>
              <div className="time">28 min</div>
            </NotificationItem>
            <NotificationItem>
              <i className="bi bi-calendar-check icon"></i>
              <div className="text"><p className="m-auto"><strong>Entrevista agendada</strong> para amanhã às 14h.</p></div>
              <div className="time">1h</div>
            </NotificationItem>
            <NotificationItem>
              <i className="bi bi-person-plus-fill icon"></i>
              <div className="text"><p className="m-auto"><strong>Empresa JYTech</strong> visualizou seu perfil.</p></div>
              <div className="time">3h</div>
            </NotificationItem>
            <NotificationItem>
              <i className="bi bi-chat-dots icon"></i>
              <div className="text"><p className="m-auto"><strong>Recrutadora Yasmin</strong> enviou uma mensagem sobre uma vaga.</p></div>
              <div className="time">5h</div>
            </NotificationItem>
          </NotificationsList>
        </NotificationBox>
      </section>
    </div>
  );
}

export default Home;
