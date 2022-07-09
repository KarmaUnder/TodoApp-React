import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';

export default function TodoApp() {
    
const [title,setTitle]=useState('');
const [todos,setTodos]=useState([])

function handleChange(e){
    setTitle(e.target.value)
}
function handleSubmit(e){
    e.preventDefault();
    if(title){
    const newTodo={
        id:crypto.randomUUID(),
        title:title,
        completed:false
    } 
    setTodos([...todos, newTodo]);
    setTitle("")
    }
}
function handleUpdate(id, value){
    const temp = [...todos]
    const item = temp.find(item=> item.id===id)
    item.title = value;
    setTodos(temp)    
}
function handleEliminar(id){
    const temp = [...todos]
    const nuevo = temp.filter(todo=>todo.id!==id)
    setTodos(nuevo);

}

return (<div className="todoContainer">
    <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Ingresar nueva tarea" className="todoInput" value={title}/>
        <input onClick={handleSubmit} className="buttonCreate" type="submit"  value="Create todo"/>
  
    </form>
    <div className="todosConteiner">
        {todos.map((todo)=>{
            return <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onEliminar={handleEliminar} />
        })}
    </div>
    
</div>
);
}