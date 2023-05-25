import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const generateUniqueId = () => {
  return uuidv4();
};

const baseUrl = "http://api.vibbraneo.com/todo/";
const api = axios.create({ baseURL: baseUrl });

const todosData = localStorage.getItem("todos");
let todos: toDo[] = todosData ? JSON.parse(todosData) : [];

interface toDo {
  id?: string;
  name: string;
  permalink?: string;
}

export const createToDo = async (todo: toDo): Promise<any> => {
  try {
    const newTodo: toDo = {
      id: generateUniqueId(),
      name: todo.name,
      permalink: `/list/${todo.name}`,
    };

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    return newTodo;
  } catch (error: any) {
    console.error(error);
    throw new Error("Error creating new toDo", error);
  }
};

export const getToDos = async (): Promise<any> => {
  try {
    const todosData = localStorage.getItem("todos");
    const todos = todosData ? JSON.parse(todosData) : [];
    return todos;
  } catch (error: any) {
    console.error(error);
    throw new Error("Error getting todos", error);
  }
};

export const deleteToDo = async (id: string): Promise<void> => {
  try {
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error: any) {
    console.error(error);
    throw new Error("Error deleting toDo", error);
  }
};

export const updateToDo = async (id: string, newName: string): Promise<any> => {
  try {
    const todosData = localStorage.getItem("todos");
    const todos = todosData ? JSON.parse(todosData) : [];
    const updatedTodoIndex = todos.findIndex((todo: toDo) => todo.id === id);
    if (updatedTodoIndex !== -1) {
      todos[updatedTodoIndex].name = newName;
      todos[updatedTodoIndex].permalink = `/list/${newName}`;
    } else {
      throw new Error(`ToDo with id ${id} not found.`);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    return todos[updatedTodoIndex];
  } catch (error: any) {
    console.error(error);
    throw new Error("Error updating toDo", error);
  }
};
