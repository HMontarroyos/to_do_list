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
  itens?: Item[];
}

interface Item {
  id: string;
  item: string;
  order?: number;
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

export const getToDoListById = (id: string): any | undefined => {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  const todoList = todos.find((todo: any) => todo.id === id);
  return todoList;
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

export const addItemToTodo = async (
  todoId: string,
  newItem: string
): Promise<any> => {
  try {
    const todosData = localStorage.getItem("todos");
    const todos: toDo[] = todosData ? JSON.parse(todosData) : [];
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
      const todo = todos[todoIndex];

      if (!todo.itens) {
        todo.itens = [];
      }

      const newItemObj = {
        id: generateUniqueId(),
        item: newItem,
        order: 0,
      };

      let maxOrder = 0;

      if (todo.itens.length > 0) {
        todo.itens.forEach((item: any) => {
          if (item.order > maxOrder) {
            maxOrder = item.order;
          }
        });
      }

      newItemObj.order = maxOrder + 1;
      todo.itens.push(newItemObj);
      localStorage.setItem("todos", JSON.stringify(todos));
      return newItemObj;
    } else {
      throw new Error(`ToDo with id ${todoId} not found.`);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error("Error adding item to ToDo", error);
  }
};

export const editItemInTodo = async (
  todoId: string,
  itemId: string,
  newName: string
): Promise<any> => {
  try {
    const todosData = localStorage.getItem("todos");
    const todos: toDo[] = todosData ? JSON.parse(todosData) : [];

    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
      const todo = todos[todoIndex];

      if (todo.itens) {
        const itemIndex = todo.itens.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
          todo.itens[itemIndex].item = newName;
          localStorage.setItem("todos", JSON.stringify(todos));
          return todo.itens[itemIndex];
        } else {
          throw new Error(
            `Item with id ${itemId} not found in ToDo ${todoId}.`
          );
        }
      } else {
        throw new Error(`ToDo with id ${todoId} does not have any items.`);
      }
    } else {
      throw new Error(`ToDo with id ${todoId} not found.`);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error("Error editing item in ToDo", error);
  }
};

export const removeItemFromTodo = async (
  todoId: string,
  itemId: string
): Promise<void> => {
  try {
    const todosData = localStorage.getItem("todos");
    const todos: toDo[] = todosData ? JSON.parse(todosData) : [];

    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
      const todo = todos[todoIndex];

      if (todo.itens) {
        const itemIndex = todo.itens.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
          todo.itens.splice(itemIndex, 1);
          localStorage.setItem("todos", JSON.stringify(todos));
        } else {
          throw new Error(
            `Item with id ${itemId} not found in ToDo ${todoId}.`
          );
        }
      } else {
        throw new Error(`ToDo with id ${todoId} does not have any items.`);
      }
    } else {
      throw new Error(`ToDo with id ${todoId} not found.`);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error("Error removing item from ToDo", error);
  }
};
