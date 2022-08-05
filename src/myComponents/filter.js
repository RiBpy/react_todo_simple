import React,{useState} from 'react';

export const Filter = (todos) => {
  const button ={
    borderRadius:'0px',
}
  const [title, setTitle] = useState('');
 const onSubmit=(e) =>{
    e.preventDefault();
    var srcTitle = document.getElementById('src').value;
    console.log(srcTitle);

}
  return (
    <div className="container col-md-4 text-center d-flex">
      <form className='' >
        <input type="text" className="form-control"  id="src" />
      </form>
      <button  className="btn btn-small btn-outline-success"style={button}  onClick={onSubmit}>Search</button>
    </div>
  )
}


