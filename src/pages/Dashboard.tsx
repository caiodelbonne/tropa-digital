 type EventoType = {
    id: number;
    titulo: string;
    data: string;
    status: StatusType;
    totalEquipes: number;
  };
export type FormDataType = {
  titulo: string;
  status: "ativo" | "finalizado";
  totalEquipes: number;
  data: string;
};

import ModalAdicionarEvento from "../Components/Modal";
// Dashboard de Eventos
import styled from "styled-components";
import dashBoardSvg from "../assets/dashboardSvg.svg";
import tropaDigital from "../assets/tropaDigital.svg"
import equipe from "../assets/equipeSvg.svg";
import eventSvg from "../assets/eventSvg.svg";
import inscricao from "../assets/inscricoesSvg.svg";
import userSvg from "../assets/user.svg";
import logout from "../assets/logout.svg";
import avatar from "../assets/avatar.png";

// alterar state
import { useState } from "react";
import { Link } from "react-router-dom";

// interface
interface StatusEventoProps {
  status: StatusType;
}
type StatusType = 'ativo' | 'finalizado';
const Container = styled.div<StatusEventoProps>`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ status }) =>
    status === 'ativo' ? '#E0F7FA' : '#F1F8E9'};
  color: ${({ status }) =>
    status === 'ativo' ? '#00796B' : '#33691E'};
`;

export const StatusEvento: React.FC<StatusEventoProps> = ({ status }) => {
  return (
    <Container status={status}>
      {status === 'ativo' ? 'Ativo' : 'Finalizado'}
    </Container>
  );
};
const ContainerDashboard = styled.div`
  display: flex;
  min-height: 100vh;
`;

const BarraLateral = styled.aside`
  width: 210px;
  color: #252525;
  padding: 30px 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ##A3A3A3;
  font-weight: 700;
`;

const SecaoMenu = styled.div``;

const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
  font-weight: 500;
  padding: 10px;
  transition: all 0.2s ease;
  border-radius: 8px;

  &:hover {
    background: #f97316;
    color: #fff;
    transform: translateX(4px);
  }

  img {
    width: 18px;
    height: 18px;
  }
`;

const SecaoUsuario = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AvatarUsuario = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border-color:red;
  object-fit: cover;
`;

const DetalhesUsuario = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 12px;
    color: #6b7280;
  }
`;

const BotaoAcao = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;

  transition: color 0.2s ease;

 

  img {
    width: 12px;
    height: 12px;
  }
`;

const Dados = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const ConteudoPrincipal = styled.main`
  flex: 1;
  background-color: #f1f5f9;
  padding: 2rem;
  font-size: 1rem;

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #1f2937;
    font-weight: 100;
    
    span {
      font-weight: bold;
      color: #101010;
    }
  }

  .subtitle {
    color: #cc6237e5;
    font-size: 20px;
    margin-bottom: 2rem;
  }
`;

const BotaoAdicionarEvento = styled.button`
  background: #f97316;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;

  &:hover {
    background: #ea580c;
    transform: translateY(-2px);
  }
`;

const ContainerControles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const CampoBusca = styled.div`
  flex: 1;
  max-width: 400px;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px;
    background: white;

    &:focus {
      outline: none;
      border-color: #f97316;
      box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

const TabelaEventos = styled.table`
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CabecalhoTabela = styled.thead`
  background: #f8fafc;

  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
    border-bottom: 1px solid #e5e7eb;
  }
`;

const CorpoTabela = styled.tbody``;

const LinhaTabela = styled.tr`
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  td {
    padding: 1rem;
    font-size: 14px;
    color: #374151;
  }
`;

const BotaoAcoes = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  color: #6b7280;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`;


const Dashboard = () => {
 
  // lista de Eventos 
  const [eventos, setEventos] = useState<EventoType[]>([
    {
      id: 1,
      titulo: "Workshop de React",
      data: "15 de Dezembro, 2024",
      status: "ativo",
      totalEquipes: 10,
    },
    {
      id: 2,
      titulo: "Conferência de Tecnologia",
      data: "20 de Janeiro, 2025",
      status: "finalizado",
      totalEquipes: 5,
    },
  ]);

  const [modalAberto, setModalAberto] = useState(false); // controla o modal

  const [formData, setFormData] = useState<FormDataType>({
  titulo: "",
  data: "",
  status: "ativo",
  totalEquipes: 0,
});

  const abrirModal = () => setModalAberto(true);

  const fecharModal = () => {
    setModalAberto(false);
    setFormData({
      titulo: "",
      data: "",
      status: "ativo",
      totalEquipes: 0,
    });
  };

  const adicionarEvento = () => {
    const novoEvento = {
      ...formData,
      id: eventos.length + 1, 
    };
    setEventos([...eventos, novoEvento]);
    fecharModal();
  };

  return (
    <>
      <ContainerDashboard>
        <BarraLateral>
          <SecaoMenu>
            <Link to="/">
              <img src={tropaDigital} alt="Tropa digital logo" />
            </Link>
            <Logo style={{ fontSize: "10px" }}>Menu</Logo>
            <ItemMenu>
              <img src={dashBoardSvg} alt="Dashboard" /> Dashboard
            </ItemMenu>
            <ItemMenu>
              <img src={eventSvg} alt="Eventos" /> Eventos
            </ItemMenu>
            <ItemMenu>
              <img src={equipe} alt="Equipes" /> Equipes
            </ItemMenu>
            <ItemMenu>
              <img src={inscricao} alt="Inscrições" /> Inscrições
            </ItemMenu>
          </SecaoMenu>

          <SecaoUsuario>
            <InfoUsuario>
              <AvatarUsuario src={avatar} alt="Usuário" />
              <DetalhesUsuario>
                <span>Kaique Steck</span>
                <span>Administrador</span>
              </DetalhesUsuario>
            </InfoUsuario>
            <Dados>
              <BotaoAcao>
                <img src={userSvg} alt="icone user" />
                Alterar Dados
              </BotaoAcao>
              <BotaoAcao>
                <img src={logout} alt="icone sair" />
                <Link to="/" style={{ textDecoration: "none", color: "#252525" }}>Sair</Link>
                {/* <a href="/" >Sair</a> */}
              </BotaoAcao>
            </Dados>
          </SecaoUsuario>
        </BarraLateral>

        <ConteudoPrincipal>
          <h2>Bem-vindo de volta, <span>Kaique Steck</span></h2>
          <p className="subtitle">Todos eventos</p>

          <ContainerControles>
            <CampoBusca>
              <input type="text" placeholder="Buscar eventos..." />
            </CampoBusca>
            <BotaoAdicionarEvento onClick={abrirModal}>+ Inserir novo</BotaoAdicionarEvento>
          </ContainerControles>

          <TabelaEventos>
            <CabecalhoTabela>
              <tr>
                <th>Nome do evento</th>
                <th>Total de equipes</th>
                <th>Status</th>
                <th>Data</th>
              </tr>
            </CabecalhoTabela>
            <CorpoTabela>
              {eventos.map((evento) => (
                <LinhaTabela key={evento.id}>
                  <td>{evento.titulo}</td>
                  <td>{evento.totalEquipes}</td>
                  <td>
                    <StatusEvento status={evento.status} />
                  </td>
                  <td>{evento.data}</td>
                  <td>
                    <BotaoAcoes>⋮</BotaoAcoes>
                  </td>
                </LinhaTabela>
              ))}
            </CorpoTabela>
          </TabelaEventos>
        </ConteudoPrincipal>
      </ContainerDashboard>

      {modalAberto && (
        <ModalAdicionarEvento
          onClose={fecharModal}
          onSubmit={adicionarEvento}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </>
  )
}


export default Dashboard;
