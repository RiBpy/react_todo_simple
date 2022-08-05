import React from 'react'
export const Todo = ({toDo}) => {
    return (
        <div>
            <h4>{toDo.title}</h4>
            <p>{toDo.desc}</p>
        </div>
    )
}
