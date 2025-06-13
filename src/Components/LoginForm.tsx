import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgDash from "../assets/imgDash.png";


const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background: #f1f5f9;
`
;
const Wrapper = styled.div`
  display: flex;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Container = styled.div`
  width: 300px;
  padding: 2rem;
`;


const ImageContainer = styled.div`
  width: 350px;
  background-color: #f97316;
  display: flex;
  align-items: center;
  justify-content: center;
  position:botton;
`;

const Input = styled.input`
  width: 259px;
  height: 40px;
  border-radius: 15px;
  padding: 0 10px;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 229px;
  padding: 10px;
  background: #f97316;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "teste" && senha === "teste") {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Email ou senha inválidos");
    }
  };

   return (
   <Section>
     <Wrapper>
    <Container>
      <h2 style={{color:"#CC6237"}}>Bem-vindo de volta</h2>
      <p style={{color:"#2A4D8E"}}>Entre com sua conta para acessar o painel.</p>
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <Button onClick={handleLogin} style={{width:"285px"}} >Entrar</Button>
    </Container>

    <ImageContainer>
      <img
        src={imgDash}
        alt="Dashboard"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          marginLeft:"-160px",
          marginBottom:"-50px"
        }}
      />
    </ImageContainer>
  </Wrapper>
  </Section>
  );
};
