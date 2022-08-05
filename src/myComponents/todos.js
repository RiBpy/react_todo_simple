import React from 'react'
import {TodoItem} from './todo';

export const Todos = (props) => {
  const min_height = {
    minHeight:'58vh',
 };
  return (
    <div className='container col-md-4' style={min_height}>
    <h3 className="text-center">Todo List</h3>
      {props.toDos.length===0 ? (<h3 className="text-center text-primary">No Todos Left</h3>) : (
      props.toDos.map((todo) => {
        return <TodoItem key={todo.id} toDo={todo} onDelete={props.OnDelete} onAdd={props.onAdd}/>;
      })
      )}
     </div>
  )
}
