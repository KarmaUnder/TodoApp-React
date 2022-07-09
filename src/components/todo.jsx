import { useState } from "react"

export default function Todo({todo, onUpdate, onEliminar}){

    const [isEdit,setIsEdit]=useState(false)

    function FormEdit(){

        const [newValue, setNewValue]=useState(todo.title)

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClick(e){
            e.preventDefault();
            onUpdate(todo.id, newValue)
            setIsEdit(false);
        }

        return (<form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" type="text" value={newValue} />
            <button type="submit" onClick={handleClick} className="button">Editar</button>
        </form>
        )    
    }

    function TodoElement(){

        function handleClickElim(e){
            e.preventDefault();
            onEliminar(todo.id)
        }
        return (<div className="todoInfo">
           
            <span className="todoTitle">{todo.title}</span> 
            <button className="button" onClick={()=>setIsEdit(true)}>Editar</button>
            <button className="buttonDelete" onClick={handleClickElim}>Eliminar</button>
            </div>)
    }

    return (
        <div className="todo">
            {isEdit ? (<FormEdit/>) : (<TodoElement/>)}     
        </div>
    )
}
   