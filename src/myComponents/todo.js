import React from 'react';
export const TodoItem = ({ toDo, onDelete }) => {
    const todoText = {
     
    }
    const Button = {
        borderRadius:'0px',
      }
    return (
        <div className="p-3" style={todoText} >

            <div className="d-flex justify-content-between">
                <h4 className=''>{toDo.title}</h4>
                <div className='' >
                    {/* <input className="" type="checkbox" /> */}
                    <button className="btn-sm btn-outline-danger" style={Button} onClick={() => { onDelete(toDo) }}>Delete</button>
                </div>
            </div>
            <p>{toDo.desc}</p>

            <hr />
        </div>
    )
}
