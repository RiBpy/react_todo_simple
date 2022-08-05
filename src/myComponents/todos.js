import React from 'react'
import {Todo} from "./todo"

export const Todos = (props) => {
  return (
    <div className='container'>
    <h3>Todo List</h3>
    
    {props.toDos.map((todo) => {
        return <Todo toDo={todo}/>
    })}
     </div>
  )
}
