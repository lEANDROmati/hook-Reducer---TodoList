import { useEffect, useReducer } from "react"
import { Formaulario } from "./components/formulario"
import { TodoList } from "./components/TodoList"
import { todoReducer } from "./components/todoReducer"




const init =()=>{
 return JSON.parse( localStorage.getItem("todos")) || [] ;
  
}

function App() {

const [todos , dispatch] = useReducer( todoReducer, [] , init)

useEffect(()=>{
 localStorage.setItem("todos", JSON.stringify( todos ));
},[todos])

const handleTodo=(todo)=>{

  const action ={
    type :"Add todo",
    payload : todo

  }

  dispatch( action ) ;

}

const handleRemove =(id)=>{

    dispatch({
      type: "Remove todo",
      payload : id
    })

}


const handleToggle=(id)=>{

  dispatch({
    type :"Toggle todo",
    payload : id
  })
  console.log("click")
}


  return (
    <>
      <h1 className="text-decoration-line-through">todoApp</h1>
      <hr />

      <div className="row margen">

              <div className="col-7">
                  <TodoList 
                  todos = {todos} 
                  onTodoDelete ={handleRemove}
                  onToggleTodo ={handleToggle}
                  />
              </div>

              <div className="col-5">
              <Formaulario onNewTodo={handleTodo}/>
              </div>
      </div>

      
    </>
  )
}

export default App;
