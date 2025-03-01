import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;

  @media (max-width: 768px) {
    top: 10px;
    left: 0px;
    width: 80px;
  }
`;

const SignupForm = styled.form`
  background-color: #fff;
  padding: 80px 50px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #386A3f;
  margin-bottom: 30px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 10px 30px 10px 30px;
  border-radius: 1rem;
  border: 1px solid #ddd;
  font-size: 1.2rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #386A3f;
  }
`;

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  padding: 12px 30px 12px 30px;
  background-color: #386A3f;
  color: white;
  border: none;
  border-radius: 3rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(55, 90, 65);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  text-align: center;
`;

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!email || !password || !confirmPassword) {
            setError("Por favor, preencha todos os campos.");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            setLoading(false);
            return;
        }

        try {
            const URL = "http://localhost:5173/api/signup";
            await new Promise((resolve) => setTimeout(resolve, 100)); {/*Fake delay, check if the link is correct (localhost*/ }
            if (email && password) {
                navigate('/home');
            }
        } catch (err) {
            console.error(err);
            setError("Aconteceu um erro ao tentar fazer o cadastro.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SignupContainer>
            <Logo src="./src/assets/logo.svg" alt="Logo" style={{ maxHeight: "50px" }} />
            <SignupForm onSubmit={handleSubmit}>
                <Title>Crie sua conta</Title>

                <div className="mb-2 text-start">
                    <label htmlFor="email" className="form-label fs-4">E-mail</label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        required
                    />
                </div>

                <div className="mb-2 text-start">
                    <label htmlFor="senha" className="form-label fs-4">Senha</label>
                    <Input
                        type="password"
                        name="senha"
                        id="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                </div>

                <div className="mb-2 text-start">
                    <label htmlFor="confirmSenha" className="form-label fs-4">Confirmar Senha</label>
                    <Input
                        type="password"
                        name="confirmSenha"
                        id="confirmSenha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirmar Senha"
                        required
                    />
                </div>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <Button type="submit" disabled={loading} className="mt-3">
                    {loading ? "Carregando..." : "Cadastrar"}
                </Button>

                <div className="mt-4 text-center">
                    <p>
                        Já tem uma conta? <a href="/login" className="text-decoration-none" style={{ color: "#386A3f" }}>Faça login aqui</a>
                    </p>
                </div>
            </SignupForm>
        </SignupContainer>
    );
}

export default Signup;
