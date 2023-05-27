import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./styled";
import { createToDo, updateToDo } from "../../server/api";
import { Buttom, Note } from "../../components";

interface ModalProps {
  value: string;
  onClose: () => void;
  onCreate: () => void;
  idToDo?: string;
}

const MAX_CHARACTERS = 50;

function Modal({ value, onClose, onCreate, idToDo }: ModalProps): JSX.Element {
  interface toDo {
    name: string;
  }

  const [newToDo, setNewToDo] = useState<toDo>({ name: value });
  const [maxAllowedCharactersInput, setMaxAllowedCharactersInput] =
    useState(false);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (value.length === MAX_CHARACTERS) {
      setMaxAllowedCharactersInput(true);
    } else {
      setMaxAllowedCharactersInput(false);
    }
    setNewToDo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createNewToDo = async (): Promise<void> => {
    if (idToDo) {
      try {
        updateToDo(idToDo, newToDo.name);
        toast.success("toDo List Editado com sucesso!");
        onCreate();
        onClose();
      } catch (error) {
        toast.error("Erro ao editar toDo List!");
        console.error(error);
      }
    } else {
      try {
        toast.success("toDo List Criado com sucesso!");
        const response = await createToDo(newToDo);
        onCreate();
        onClose();
        navigate(`/todo/${response.id}`);
      } catch (error) {
        toast.error("Erro ao criar toDo List!");
        console.error(error);
      }
    }
  };

  return (
    <S.ModalOverlay>
      <Note closeIcon onClose={onClose}>
        <S.ContainerInput>
          <S.Input
            type="text"
            id="name"
            name="name"
            placeholder={"Digite o nome do toDo List"}
            value={newToDo.name}
            onChange={handleChange}
            maxLength={MAX_CHARACTERS}
            required
          />
          {maxAllowedCharactersInput && (
            <S.TextMaxCharacter>
              Limite máximo de caracteres excedido!
            </S.TextMaxCharacter>
          )}
          <Buttom
            width={"80px"}
            height={"40px"}
            onClick={createNewToDo}
            disabled={newToDo.name.length === 0 || newToDo.name === value}
          >
            Salvar
          </Buttom>
        </S.ContainerInput>
      </Note>
    </S.ModalOverlay>
  );
}

export default Modal;
