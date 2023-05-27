import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./styled";
import { Buttom, Note, Modal } from "../../components";
import { getToDos, deleteToDo } from "../../server/api";

interface todoList {
  id: string;
  name: string;
}

type HomeProps = {
  modal?: boolean;
};

const Home: React.FC<HomeProps> = ({ modal }) => {
  const location = useLocation();
  const [todoLists, setTodoLists] = useState<todoList[]>([]);
  const [showModal, setShowModal] = useState<boolean | undefined>(false);
  const [editToDo, setEditToDo] = useState("");
  const [editToDoName, setEditToDoName] = useState("");

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    const value = queryParams.value === "true";
    if (value || modal) {
      const hasModal = value || modal;
      setShowModal(hasModal);
    }
  }, [location.search]);

  const fetchToDos = async (): Promise<void> => {
    try {
      const toDos = await getToDos();
      setTodoLists(toDos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  const closeModalToDo = () => {
    setShowModal(false);
    clearEditToDo();
  };

  const onRemove = (id: string) => {
    Swal.fire({
      title: "Você deseja deletar este toDo List?",
      text: "Lembre-se essa ação não tem volta!",
      icon: "warning",
      color: "#605951",
      background: "#F2E9e6",
      iconColor: "#ff6161",
      showCancelButton: true,
      confirmButtonColor: "#95de90",
      cancelButtonColor: "#ff6161",
      cancelButtonText: "Cancelar",
      confirmButtonText: "OK, deletar toDo list",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteToDo(id);
          fetchToDos();
          toast.success("toDo List Deletado com sucesso!");
        } catch (e) {
          toast.error("Ocorreu um erro ao deletar toDo List!");
          console.error(e);
        }
      }
    });
  };

  const onEdit = (id: string) => {
    const todo = todoLists.find((todo) => todo.id === id);
    setShowModal(true);
    setEditToDo(id);
    if (todo) {
      setEditToDoName(todo.name);
    }
  };

  const clearEditToDo = () => {
    setEditToDo("");
    setEditToDoName("");
  };

  const createNewToDo = () => {
    clearEditToDo();
    setShowModal(true);
  };

  return (
    <>
      <S.Container>
        <Fade top cascade>
          <S.ContainerParagraph>
            <S.Title>ToDo List</S.Title>
            <S.Paragraph>
              Bem-vindo(a) ao nosso sistema de gerenciamento de tarefas! Sabemos
              o quão importante é ser produtivo e organizar suas atividades
              diárias de maneira eficiente. Para ajudá-lo(a) nessa jornada,
              criamos um recurso que permite a criação de uma nova lista de
              tarefas com um simples clique no botão "Criar Novo ToDo List".
            </S.Paragraph>
          </S.ContainerParagraph>
        </Fade>
        <Buttom
          width="185px"
          height="40px"
          onClick={() => {
            createNewToDo();
          }}
        >
          Criar Novo ToDo List
        </Buttom>
        {todoLists.length === 0 ? (
          <S.ContainerParagraph>
            <S.Paragraph>
              Não existe listas criadas ainda ;( Não deixe o vazio dominar sua
              produtividade ! Crie agora mesmo sua primeira lista de tarefas e
              dê um passo rumo ao sucesso
            </S.Paragraph>
          </S.ContainerParagraph>
        ) : (
          <>
            <S.ContainerNote>
              {todoLists.map((todo) => (
                <Note
                  id={todo.id}
                  key={todo.id}
                  onRemove={() => onRemove(todo.id)}
                  onEdit={() => onEdit(todo.id)}
                >
                  <S.TextToDo>{todo.name}</S.TextToDo>
                </Note>
              ))}
            </S.ContainerNote>
          </>
        )}
      </S.Container>
      {showModal && (
        <Modal
          onCreate={fetchToDos}
          onClose={closeModalToDo}
          value={editToDoName}
          idToDo={editToDo}
        />
      )}
    </>
  );
};

export default Home;
