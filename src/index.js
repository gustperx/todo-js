import "./style.css";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();

//const tarea = new Todo("Aprender JavaScript");
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);
//tarea.imprimirClase();

todoList.todos.forEach((todo) => crearTodoHtml(todo));

console.log(todoList.todos);

// todoList.todos[0].imprimirClase();
