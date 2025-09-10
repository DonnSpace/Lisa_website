import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import TaskManager from "../pages/TaskManager";
import Greeting from "./Greeting";
import LisaSite from "../projects/LisaSite/Lisa";
import Counter from "./Counter";
import TodoApp from "./TodoApp";

// Top Navigation bar links items
export const navItems = [
	{ label: "Home", url: "/", page: <Home /> },
	{ label: "About", url: "/about", page: <About /> },
	{ label: "Project", url: "/project", page: <Project /> },
];

// Lists of My Mini Projects so far
export const miniProjects = [
	{ label: "Greeting", url: "/project/greeting", page: <Greeting /> },
	{ label: "Counter App", url: "/project/counter-app", page: <Counter /> },
	{ label: "TO DO App", url: "/project/todo-app", page: <TodoApp /> },
];

// Lists of My Projects so far
export const projects = [
	{ label: "Task Manager", url: "/project/task-manager", page: <TaskManager /> },
	{ label: "Lisa PortFolio Site", url: "/lisa", page: <LisaSite /> },
];
