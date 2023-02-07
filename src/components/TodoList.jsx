import { ItemTodo } from "./ItemTodo"


export const TodoList =({ todos , onTodoDelete, onToggleTodo})=>{
    
    return(

    <div className="list-group">
       {
        todos.map( todo =>(
           
            <ItemTodo  
            key={todo.id} 
             todo = {todo} 
             onDelete={onTodoDelete}
             onToggleTodo={onToggleTodo}  />
        ))
       }
    </div>
    )
}