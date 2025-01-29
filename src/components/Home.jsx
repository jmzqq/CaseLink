import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  `;

  const TitleGreen = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    background-color: rgb(55, 139, 80);
    padding: 15px;
    border-radius: 15px;
    color: white;
    width: 100%;
    font-size: 1.65rem;
    margin-left: auto;
    margin-right: auto;
  `;

  const TitleDark = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    background-color: rgb(66, 70, 73);
    padding: 15px;
    border-radius: 15px;
    color: white;
    width: 100%;
    font-size: 1.65rem;
    margin-left: auto;
    margin-right: auto;
  `;

  const PostInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  `;

  const CardBodyJob = styled.div`
  min-height: 190px;
  padding: 3rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 160px;
    padding: 2.5rem 1rem;
  }

  @media (max-width: 576px) {
    min-height: 140px; 
    padding: 1.5rem 0.75rem;
  }
  `;

  const CardBodyFeedback = styled.div`
  min-height: 150px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) 
    min-height: 120px;
    padding: 1rem;

   @media (max-width: 576px) {
    min-height: 100px;
    padding: 0.75rem;
  }
  `;

  const CardBorderNone = styled.div`
  border: none;
  }
  `
  
  const CardBorderZero = styled.div`
  border: solid #fff;
  padding: 18px;
  `

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="navbar navbar-expand-lg bg-light px-5 shadow-sm">
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
      </div>

      <section className="container">
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <TitleGreen>Vagas em Destaque</TitleGreen>
            <div className="row row-cols-2 row-cols-md-3 g-2 shadow-sm rounded-5">
              <div className="col">
                <CardBorderNone>
                  <CardBodyJob className="d-flex justify-content-between">
                    <h5 className="card-title text-center">Desenvolvedor Front-End</h5>
                    <Link to="#" className="btn btn-success d-flex justify-content-center">Ver Vaga</Link>
                  </CardBodyJob>
                </CardBorderNone>
              </div>
              <div className="col">
                <CardBorderNone>
                  <CardBodyJob className="d-flex justify-content-between">
                    <h5 className="card-title text-center">Assistente de Marketing</h5>
                    <Link to="#" className="btn btn-success d-flex justify-content-center">Ver Vaga</Link>
                  </CardBodyJob>
                </CardBorderNone>
              </div>
              <div className="col">
                <CardBorderNone>
                  <CardBodyJob className="d-flex justify-content-between">
                    <h5 className="card-title text-center">Analista de Dados</h5>
                    <Link to="#" className="btn btn-success d-flex justify-content-center">Ver Vaga</Link>
                  </CardBodyJob>
                </CardBorderNone>
              </div>
              <div className="col">
                <CardBorderNone>
                  <CardBodyJob className="d-flex justify-content-between">
                    <h5 className="card-title text-center">Desenvolvedor Back-End</h5>
                    <Link to="#" className="btn btn-success d-flex justify-content-center">Ver Vaga</Link>
                  </CardBodyJob>
                </CardBorderNone>
              </div>
              <div className="col">
                <CardBorderNone>
                  <CardBodyJob className="d-flex justify-content-between">
                    <h5 className="card-title text-center">Analista de Qualidade</h5>
                    <Link to="#" className="btn btn-success d-flex justify-content-center">Ver Vaga</Link>
                  </CardBodyJob>
                </CardBorderNone>
              </div>
              <div className="col">
                <CardBorderNone>
                  <CardBodyJob className="d-flex justify-content-between">
                    <h5 className="card-title text-center">Designer UX/UI</h5>
                    <Link to="#" className="btn btn-success d-flex justify-content-center">Ver Vaga</Link>
                  </CardBodyJob>
                </CardBorderNone>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <section className="container">
              <TitleDark>Cursos Recomendados</TitleDark>
              <div className="row row-cols-1 row-cols-md-2 g-2 shadow-sm rounded-5">
                <div className="col">
                  <CardBorderZero>
                    <div className="card-body">
                      <h5 className="card-title text-center">Introdução ao React</h5>
                      <p className="card-text text-center">Aprenda a construir interfaces dinâmicas com React.</p>
                      <Link to="/cursos" className="btn btn-dark d-flex justify-content-center">Ver Curso</Link>
                    </div>
                  </CardBorderZero>
                </div>
                <div className="col">
                  <CardBorderZero>
                    <div className="card-body">
                      <h5 className="card-title text-center">Marketing Digital</h5>
                      <p className="card-text text-center">Curso completo sobre estratégias de marketing digital para iniciantes.</p>
                      <Link to="/cursos" className="btn btn-dark d-flex justify-content-center">Ver Curso</Link>
                    </div>
                  </CardBorderZero>
                </div>
                <div className="col">
                  <CardBorderZero>
                    <div className="card-body">
                      <h5 className="card-title text-center">Análise de Dados com Python</h5>
                      <p className="card-text text-center">Curso focado em análise de dados usando Python e bibliotecas populares.</p>
                      <Link to="/cursos" className="btn btn-dark d-flex justify-content-center">Ver Curso</Link>
                    </div>
                  </CardBorderZero>
                </div>
                <div className="col">
                  <CardBorderZero>
                    <div className="card-body">
                      <h5 className="card-title text-center">Desenvolvimento Web com React</h5>
                      <p className="card-text text-center">Curso focado no aprendizado e aplicação de React para criação de interfaces dinâmicas e interativas.</p>
                      <Link to="/cursos" className="btn btn-dark d-flex justify-content-center">Ver Curso</Link>
                    </div>
                  </CardBorderZero>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center mb-4 display-3 fw-semibold">Depoimentos de Usuários</h2>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <CardBodyFeedback>
                <p className="card-text fw-bold fs-6 fs-md-5">"O site me ajudou a encontrar o trabalho dos meus sonhos! Recomendo a todos." - João Silva</p>
              </CardBodyFeedback>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <CardBodyFeedback>
                <p className="card-text fw-bold fs-6 fs-md-5">"Encontrei oportunidades incríveis e agora estou empregado na área de marketing!" - Maria Oliveira</p>
              </CardBodyFeedback>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <CardBodyFeedback>
                <p className="card-text fw-bold fs-6 fs-md-5">"Excelente plataforma! Ajudou a me preparar com cursos e me conectar com empresas." - Pedro Costa</p>
              </CardBodyFeedback>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
