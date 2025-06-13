import styled from "styled-components";


type ModalAdicionarEventoProps = {
  onClose: () => void;
  onSubmit: () => void;
  formData: {
    titulo: string;
    status: string;
    totalEquipes: number;
    data: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    titulo: string;
    status: string;
    totalEquipes: number;
    data: string;
  }>>;
};

type BotaoProps = {
  cancelar?: boolean;
};

const FundoModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

const Campo = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  input,
  select {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 12px;

    &:focus {
      outline: none;
      border-color: #f97316;
    }
  }
`;

const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Botao = styled.button<BotaoProps>`
  background: ${(props) => (props.cancelar ? "#e5e7eb" : "#f97316")};
  color: ${(props) => (props.cancelar ? "#374151" : "#fff")};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ModalAdicionarEvento = ({
  onClose,
  onSubmit,
  formData,
  setFormData,
}: ModalAdicionarEventoProps) => {

   const handleSave = () => {
    if (!formData.titulo || !formData.status || !formData.totalEquipes || !formData.data) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    onSubmit();
  };
  return (
    <FundoModal>
      <ModalContainer>
        <h3 style={{ marginBottom: "1rem", fontSize: "12px", fontWeight: 600 }}>
          Novo Evento
        </h3>

        <Campo>
          <label>Nome do Evento</label>
          <input
            type="text"
            required
            value={formData.titulo}
            onChange={(e) =>
              setFormData({ ...formData, titulo: e.target.value })
            }
          />
        </Campo>

        <Campo>
          <label>Status</label>
          <select
            required
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="ativo">Ativo</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </Campo>

        <Campo>
          <label>Total de Equipes</label>
          <input
            type="number"
            required
            value={formData.totalEquipes}
            onChange={(e) =>
              setFormData({
                ...formData,
                totalEquipes: Number(e.target.value),
              })
            }
          />
        </Campo>

        <Campo>
          <label>Data</label>
          <input
            required
            type="date"
            value={formData.data}
            onChange={(e) =>
              setFormData({ ...formData, data: e.target.value })
            }
          />
        </Campo>

        <Botoes>
          <Botao cancelar onClick={onClose}>
            Cancelar
          </Botao>
          <Botao onClick={handleSave}>Salvar</Botao>
        </Botoes>
      </ModalContainer>
    </FundoModal>
  );
};

export default ModalAdicionarEvento;
