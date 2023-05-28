import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import * as S from "./styled";
import {
  getToDos,
  getToDoListById,
  deleteToDo,
  addItemToTodo,
  editItemInTodo,
  removeItemFromTodo,
} from "../../server/api";
import { Buttom, TextLink, NotebookSheet } from "../../components";

interface Item {
  id: number;
  item: string;
  order: number;
}

const ToDoListId: React.FC = () => {
  const navigate = useNavigate();
  const [toDoLists, setToDoLists] = useState([]);
  const [toDo, setToDo] = useState<any>();
  const { id } = useParams<{ id: string }>();

  const fetchToDo = async (): Promise<void> => {
    try {
      const todos = await getToDos();
      setToDoLists(todos);
      const hasId = todos.some((toDo: any) => toDo.id === id);
      if (id && hasId) {
        const toDoById = await getToDoListById(id);
        setToDo(toDoById);
      } else {
        const queryParams = queryString.stringify({ value: true });
        navigate(`/?${queryParams}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchToDo();
  }, []);

  const handleEmail = () => {
    const currentURL = window.location.href;
    const emailSubject =
      "Venha conferir minha Lista de Tarefas e crie a sua! ✅";
    const emailBody = `Maximize sua produtividade com minha incrível Lista de Tarefas personalizada! Clique no link abaixo para conhecer minha Lista de Tarefas e fique a vontade caso queira adicionar novas tarefas ou excluir e atualizar alguma existente, aproveite e crie a sua também 😀\n\n${currentURL}`;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    window.open(mailtoLink);
  };

  const deleteToDoList = () => {
    Swal.fire({
      title:
        "Você deseja deletar este toDo List? Isso irá deletar todos seus itens atribuidos a este toDo.",
      text: "Lembre-se essa ação não tem volta, após isso você sera redirecionado para a Home onde poderá criar novos toDo List",
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
          id && deleteToDo(id);
          navigate(`/`);
          toast.success("toDo List Deletado com sucesso!");
        } catch (e) {
          toast.error("Ocorreu um erro ao deletar toDo List!");
          console.error(e);
        }
      }
    });
  };

  const createToDoList = async () => {
    Swal.fire({
      text: "Digite o nome da tarefa que deseja criar.",
      color: "#605951",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      background: "#F2E9e6",
      showCancelButton: true,
      confirmButtonColor: "#95de90",
      cancelButtonColor: "#ff6161",
      cancelButtonText: "Cancelar",
      confirmButtonText: "OK, criar nova tarefa",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          id && (await addItemToTodo(id, result.value));
          fetchToDo();
          toast.success("Tarefa Criada com sucesso !");
        } catch (e) {
          toast.error("Ocorreu um erro ao criar nova tarefa");
          console.error(e);
        }
      }
    });
  };

  const editTask = (idTask: string) => {
    //TODO: Vir com o nome
    //TODO: Disabled de salvar
    Swal.fire({
      icon: "info",
      iconColor: "#61a6ab",
      text: "Digite o novo nome da tarefa para ser editado",
      color: "#605951",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      background: "#F2E9e6",
      showCancelButton: true,
      confirmButtonColor: "#95de90",
      cancelButtonColor: "#ff6161",
      cancelButtonText: "Cancelar",
      confirmButtonText: "OK, editar e salvar nova tarefa",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          id && (await editItemInTodo(id, idTask, result.value));
          fetchToDo();
          toast.success("Tarefa Editada com sucesso !");
        } catch (e) {
          toast.error("Ocorreu um erro ao editar sua tarefa");
          console.error(e);
        }
      }
    });
  };

  const deleteTask = (idTask: string) => {
    Swal.fire({
      title: "Você deseja deletar esta tarefa ?",
      text: "Lembre-se essa ação não tem volta!",
      icon: "warning",
      color: "#605951",
      background: "#F2E9e6",
      iconColor: "#ff6161",
      showCancelButton: true,
      confirmButtonColor: "#95de90",
      cancelButtonColor: "#ff6161",
      cancelButtonText: "Cancelar",
      confirmButtonText: "OK, deletar tarefa",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          id && removeItemFromTodo(id, idTask);
          fetchToDo();
          toast.success("Tarefa deletada com sucesso!");
        } catch (e) {
          toast.error("Ocorreu um erro ao deletar tarefa!");
          console.error(e);
        }
      }
    });
  };

  const handleTaskChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    taskId: number
  ) => {
    const task = toDo.itens[taskId];
    if (toDo && toDo.itens && task) {
      const updatedToDoTask = [...toDo.itens];
      if (!updatedToDoTask[taskId].hasOwnProperty("checked")) {
        updatedToDoTask[taskId].checked = false;
      }
      updatedToDoTask[taskId].checked = e.target.checked;
      setToDo(
        (prevToDo: any) => ({ ...prevToDo, itens: updatedToDoTask } as any)
      );
      if (e.target.checked) {
        Swal.fire({
          title:
            "Você marcou sua tarefa como finalizada,  deseja excluir ela ?",
          text: " Caso não exclua ao sair da pagina terá que refazer o processo de checked manualmente",
          icon: "question",
          color: "#605951",
          background: "#F2E9e6",
          iconColor: "#61a6ab",
          showCancelButton: true,
          confirmButtonColor: "#95de90",
          cancelButtonColor: "#ff6161",
          cancelButtonText: "Cancelar",
          confirmButtonText: "OK, desejo prosseguir e deletar a tarefa",
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              id && removeItemFromTodo(id, task.id);
              fetchToDo();
              toast.success("Tarefa deletada com sucesso!");
            } catch (e) {
              toast.error("Ocorreu um erro ao deletar tarefa!");
              console.error(e);
            }
          }
        });
      }
    } else {
      return;
    }
  };

  return (
    <>
      {toDo && (
        <>
          <S.Container>
            {toDo?.name && (
              <S.ContainerTitle>
                <S.Title>{toDo.name}</S.Title>
              </S.ContainerTitle>
            )}
            <Buttom width="190px" height="40px" onClick={handleEmail}>
              <S.WrapperTextButton>
                <p>Compartilhar via-email </p>
              </S.WrapperTextButton>
            </Buttom>
          </S.Container>
          <S.ContainerTable>
            <div>
              <Buttom
                colorWarning
                width="190px"
                height="40px"
                onClick={deleteToDoList}
              >
                <S.WrapperTextButton>
                  <p>Deletar lista</p>
                </S.WrapperTextButton>
              </Buttom>
              <Buttom width="190px" height="40px" onClick={createToDoList}>
                <S.WrapperTextButton>
                  <p>Novo item</p>
                </S.WrapperTextButton>
              </Buttom>
            </div>
          </S.ContainerTable>
          {toDo?.itens && toDo.itens.length > 0 ? (
            <NotebookSheet>
              {toDo.itens.map((_item: any, idx: number) => (
                <>
                  <S.ContainerInput /* taskChildren={toDo.itens[idx].checked} */
                  >
                    <div key={idx}>
                      <S.Input
                        type="checkbox"
                        checked={toDo.itens[idx].checked}
                        onChange={(e) => handleTaskChange(e, idx)}
                      />
                      <S.Item checked={toDo.itens[idx].checked}>
                        {_item.item}
                      </S.Item>
                    </div>
                    <S.ContainerButtons>
                      <TextLink
                        color={"#61a6ab"}
                        name={"Editar"}
                        onClick={() => editTask(_item.id)}
                      />
                      <TextLink
                        color={"#ff6161"}
                        name={"Remover"}
                        onClick={() => deleteTask(_item.id)}
                      />
                      {/*                       {_item.item && (
                      <TextLink
                        color={"#54a04d"}
                        name={"Adicionar sub-item"}
                        onClick={() => console.log(taskChildren={toDo.itens[idx].checked)}
                      />
                      )} */}
                    </S.ContainerButtons>
                  </S.ContainerInput>
                </>
              ))}
            </NotebookSheet>
          ) : (
            <S.Paragraph>
              Não existe itens atribuidos a este toDo, para criar uma nova
              tarefa clique no botão "Novo item"
            </S.Paragraph>
          )}
        </>
      )}
    </>
  );
};

export default ToDoListId;
