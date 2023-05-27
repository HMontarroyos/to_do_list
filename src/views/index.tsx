import { lazy } from "react";

const Home = lazy(async () => await import("./Home"));
const About = lazy(async () => await import("./About"));
const ToDoListId = lazy(async () => await import("./ToDoListId"));

export { Home, About, ToDoListId };
