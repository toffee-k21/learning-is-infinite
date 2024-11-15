import  { useContext} from 'react'
import { Todo, todoContext } from '../utils/Context'
import { useSearchParams } from 'react-router-dom'

const Display = () => {
  const Todos = useContext(todoContext)
  const {todo,handleToggleItems,handleDeleteItem} = Todos!

const  [searchParams] = useSearchParams()//using useSearchParams hooks will re render my component

const params = searchParams.get("todos");

let filterData = todo;

if(params == "active"){
 filterData = filterData.filter((r)=>{
  return r.completed == false
})}
if(params == "completed"){
 filterData = filterData.filter((r)=>{
  return r.completed == true
})}
else{
 filterData = filterData.map((r)=>{
  return r
})}

// const func = (t:Todo[] )=>{
// localStorage.setItem("todo",JSON.stringify(t));
// }



  return (
    <div>
            {
        filterData?.map((r: Todo) => {
          return <li className='list-none'>
            <input type="checkbox"
              checked={r.completed}
              onChange={() => handleToggleItems(r?.id)} 
              />
            {r.completed? <del>{r.task}</del>:<label>{r?.task}</label>}
            {r.completed ? <button onClick={() => handleDeleteItem(r?.id)} className='bg-red-500 p-1 ml-10'>Delete</button>: <button></button>}
          </li>
        }
        
      )
    }

    {/* <button onClick={()=>func(todo)}>save</button> */}
    </div>
  )
}

export default Display