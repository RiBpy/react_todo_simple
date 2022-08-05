import React, { useState } from 'react'

export const AddTodos = ({addTodo}) => {
    const fullForm={
       boxShadow:"2px 1px #777777",
    }
    const button ={
        borderRadius:'0px',
        marginTop:'24px',
    }
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    const ADD=(e)=>{
        e.preventDefault();
        if(title.length === 0 || desc.length === 0){
            alert("Please enter a title and description");
            return;
        }else{
            addTodo(title,desc);
            settitle('');
            setdesc('');
        }
        
      };
    return (
        <div className="container col-md-5">
            <form className="d-flex p-3" style={fullForm}>
                <div className="form-group mx-2">
                    <label >Todo Title</label>
                    <input type="text" className="form-control" onChange={(e)=>settitle(e.target.value)} value={title}/>
                </div>
                <div className="form-group">
                    <label >Todo Description</label>
                    <input type="text" className="form-control " onChange={(e)=>setdesc(e.target.value)} value={desc} />
                </div>
                <button type="submit" style={button} className="btn btn-outline-success" onClick={ADD}>Submit</button>
            </form>
        </div>
    )
}
