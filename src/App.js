import './App.css';
import Header from './myComponents/header';
import { AddTodos } from './myComponents/addTodos';
import { Todos } from './myComponents/todos';
import { About } from './myComponents/about';
import Footer from './myComponents/footer';
import { Filter } from './myComponents/filter';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e.id !== todo.id;
    }));
  }
  let initTodos;
  if (localStorage.getItem('todos') === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }
  const onAdd = (title, desc) => {
    let id;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }
    const newTodo = {
      id: id,
      title: title,
      desc: desc,
    }
    setTodos([...todos, newTodo]);
  }
  // const onUpdate = (todo, desc) => {
  //   setTodos(todos.map((e) => {
  //     if (e.id === todo.id) {
  //       e.desc = desc;
  //       e.title = todo.title;
  //     }
  //     return e;
  //   }));
  // }
  // const completeTodo=id =>{
  //   let updatedTodos = todos.map(todo => {
  //     if(todo.id === id){
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);

  // }

  let [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (

    <>
      <Router>
        <Header title="MyTodos" />
        <Routes>
          <Route  path="/" element={
            <>
                {/* <Filter todos={todos} /> */}
                <AddTodos addTodo={onAdd}/>
                <Todos toDos={todos} OnDelete={onDelete} />
            </>
          }/>
          <Route  path="about" element={<About/>}/>    
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
