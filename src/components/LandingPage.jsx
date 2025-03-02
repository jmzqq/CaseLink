import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from "styled-components";

function LandingPage() {
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
    display: flex;
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

    const SectionBackground = styled.div`
    background-image: url(./src/assets/group-positive-young-people-posing-together.jpg);
    background-size: cover;
    background-position: center;
    height: 300px;
    border-radius: 30px;
    margin-top: 50px;
    position: relative;
    `;

    const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 30px;
    z-index: 1; 
    `;

    const Title = styled.h1`
    position: relative;
    z-index: 2;
    text-align: center;
    margin-bottom: 1rem;
    padding: 15px;
    border-radius: 15px;
    color: white;
    width: 100%;
    font-size: 1.65rem;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    `;

    const ButtonLink = styled(Link)`
    position: relative; /* Para posicionar acima do overlay */
    z-index: 2; /* Coloca o botão acima do overlay */
    `;

    const Footer = styled.footer`
    background-color: #386A3f;
    color: white;
    padding: 40px 0;
    text-align: center;
    margin-top: auto;

    .footer-links a {
      color: white;
      margin: 0 15px;
      text-decoration: none;
      font-size: 1rem;
    }

    .footer-links a:hover {
      text-decoration: underline;
    }

    .social-icons i {
      font-size: 1.5rem;
      margin: 0 10px;
      transition: 0.3s;
    }

    .social-icons i:hover {
      transform: scale(1.2);
    }
    `;

    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f4f4f4' }}>
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

            <SectionBackground className="container py-5 text-center bg-dark rounded-5 mt-3">
                <Overlay />
                <Title>Encontre o seu próximo emprego ou curso</Title>
                <ButtonLink to="/Home" className="btn btn-success btn-lg ">Ver Vagas</ButtonLink>
            </SectionBackground>

            <section className="container py-5 text-center">
                <h2 className="display-4 fw-bold mb-3">Sobre a plataforma</h2>
                <p className="lead mb-4">
                    CaseLink é uma plataforma que conecta imigrantes, migrantes e refugiados com oportunidades de emprego e aprendizado. Nosso objetivo é fornecer uma solução eficaz para quem busca recomeçar a vida profissional em um novo país, garantindo acesso a vagas e cursos de qualificação.
                    Criada com a missão de promover a inclusão e a diversidade no mercado de trabalho, a plataforma oferece uma interface intuitiva que facilita o acesso tanto para quem busca uma nova oportunidade quanto para empresas que desejam contratar mão de obra qualificada. Por meio do CaseLink, imigrantes podem criar perfis profissionais, destacar suas habilidades, experiência e formação, e se conectar com empregadores que buscam talentos globais.
                </p>
            </section>

            <section className="container py-5 text-center">
                <h2 className="display-4 fw-bold mb-3">Depoimentos</h2>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <p className="lead mb-4">"A CaseLink me ajudou a encontrar o emprego dos meus sonhos em apenas dois meses! A plataforma é fácil de usar e tem muitas oportunidades para pessoas como eu."</p>
                            <footer className="blockquote-footer">Maria, Imigrante</footer>
                        </div>
                        <div className="carousel-item">
                            <p className="lead mb-4">"Graças à CaseLink, consegui realizar cursos de qualificação que me ajudaram a me adaptar ao mercado de trabalho local. A plataforma realmente faz a diferença!"</p>
                            <footer className="blockquote-footer">José, Migrante</footer>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <Footer>
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <p className="mb-2">© {new Date().getFullYear()} CaseLink.</p>
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
}

export default LandingPage;
