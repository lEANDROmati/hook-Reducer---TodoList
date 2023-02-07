

export const ItemTodo =({todo, onDelete, onToggleTodo})=>{

    return(

        <li className="list-group-item d-flex justify-content-between   " >
            
        <span 
        className= {(todo.done) ? "tachar" : ""}
        onClick={()=>onToggleTodo(todo.id)}
        
        >{todo.description}
        </span>

        <button 
        className="btn btn-danger"
        onClick={()=> onDelete(todo.id)}
        >borrar</button>
        
      </li>
    )
}