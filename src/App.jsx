import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Footer from "./components/Footer";
function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState ([])

  useEffect(() => {
    let todoString = localStorage.getItem ("todos")
    if(todoString){
    let savedTodos = JSON.parse(localStorage.getItem("todos"))
    setTodos(savedTodos)
    }
  }, [])
  
  
  const saveToLs = (newTodos) => {
    localStorage.setItem ("todos",JSON.stringify(newTodos))
  }
  

  const handleEdit = (e,id)=>{
    let t = todos.filter (i=> i.id === id )
    setTodo(t[0].todo)
        let newTodos = todos.filter(item=> {
      return item.id!==id
    });
    setTodos (newTodos)
    saveToLs(newTodos)
  }

  const handleDelete = (e, id)=>{
    if (window.confirm("Are you sure you want to delete this todo?")) {
    let newTodos = todos.filter(item=> {return item.id!==id});
    setTodos (newTodos)
    saveToLs(newTodos)
    }
  }

  const handleAdd = ()=>{
    let newTodos= ([...todos, {id:uuidv4(),todo, isCompleted: false}])
    setTodos (newTodos)
    setTodo("")
    saveToLs(newTodos)
  }

   const handleChange = (e)=>{
    setTodo(e.target.value)
    
  }

  const handleCheckbox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
       return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos (newTodos)
    saveToLs(newTodos)
  }



  return (
    <>
      <Navbar />
      <div className="max-w-7xl md:mx-auto bg-violet-200 rounded-2xl my-5 py-5 px-5 min-h-[80vh] md:w-1/2">
      <h1 className="font-bold text-2xl p-2 mb-5 text-center">myTodo  List- Manage & Plan your Todo</h1>
        <div className="addToDo my-2 flex flex-col">
          <h2 className="text-lg font-bold">Add a ToDo </h2>
          <input onChange={handleChange} value={todo} className = "bg-white w-full" type="text" />
          <button onClick ={handleAdd} disabled={todo.length<=3} className="bg-violet-800 hover:bg-violet-950 w-full cursor-pointer my-2 text-white p-2 py-1 rounded-2xl">Save</button>
        </div>

        <h2 className="text-lg font-bold">Your ToDos</h2>
        <div className="todos">
          {todos.length===0 && <div className="font-light text-blue-800 text-center my-35 text-2xl">No ToDos to display</div>}
          {todos.map(item=>{

          return <div key={item.id} className="todo flex 40vw my-3 justify-between">
            <div className="flex gap-8">
            <input type="checkbox" checked={item.isCompleted} onChange={handleCheckbox} name={item.id} id=""/>
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-violet-800 hover:bg-violet-950 cursor-pointer mx-1 text-white p-2 py-0 rounded"><FaEdit /></button>
              <button onClick={(e)=>{handleDelete(e,item.id)}} className="bg-violet-800 hover:bg-violet-950 cursor-pointer mx-1 text-white p-2 py-0 rounded"><AiFillDelete /></button>
            </div>
        </div>
        })}
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default App;