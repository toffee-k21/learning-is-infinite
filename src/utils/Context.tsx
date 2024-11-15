import { ReactNode, createContext, useContext, useEffect, useState } from "react";

export const todoContext = createContext<TodoContextProvider | null>(null);

type TodoProviderProps = {
    children: ReactNode
}

type TodoContextProvider = {
    todo: Todo[];
    handleTodo: (task: string) => void;
    handleToggleItems: (id: string) => void;
    handleDeleteItem: (id:string) => void;
    // useList: 
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean,
    createdAt: Date
}

export const TodoContextProvider = ({ children }: TodoProviderProps) => {
    const [todo, setTodo] = useState<Todo[]>(() =>{
        try {
          const st =  localStorage.getItem("todo") || "[]"
          return JSON.parse(st) as Todo[]
            
        } catch (error) {
            return []
        }
    }
    )
// useEffect(()=>{
    // if(localStorage != [])
//         console.log(localStorage)
//   if (localStorage.getItem("todo") !== null) JSON.parse(localStorage.getItem("todo"))
//     else{console.log("err")}
// note: localStorage.getItem("todo") direct use krne s ts clear nhi kr paa rha type so stroe it in variable
//GPT: However, this type narrowing only applies to the code block where the check is performed. If you use localStorage.getItem('todo') directly without storing it in a variable, TypeScript doesn't have a clear view of where the null check is applied. Therefore, it doesn't perform the type narrowing automatically in subsequent usages.

//  /gpt
// Retrieve JSON string from localStorage
// let jsonStringNullable: string | null = localStorage.getItem('todo');

// if (jsonStringNullable !== null) {
//     // Parsing JSON string to object
//     let jsonObject = JSON.parse(jsonStringNullable);
//     setTodo(jsonObject); // Output: { key1: 'value1', key2: 'value2', key3: 'value3' }

// } else {
//     console.error('JSON string is null or key does not exist in localStorage');
// }
// },[])

    const handleTodo = (task: string): void => {
        setTodo((prev) => {
            const newTodo = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date()
            },
            ...prev]
            localStorage.setItem("todo", JSON.stringify(newTodo));
            //ishki position bht matter kregi ye agr bhr rkh loge toh emty hone pr fir execute hogi ar localstorage emty kr degi. ishliye on refresh ye call na ho ishliye function k andr daal diya ....demo bhi diya hai ek save btn bnya hoga display me.
            return newTodo
        })
    }

    const handleToggleItems = (id: string) => {
        setTodo((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, completed: !todo.completed }
                }
                else return todo
            })
            localStorage.setItem("todo", JSON.stringify(newTodos));
            return newTodos
        })
    }

    const handleDeleteItem = (id:string) =>{
setTodo((prev)=> { 
    const newTodos = prev.filter((r)=>{
       return r.id != id
    })
    localStorage.setItem("todo",JSON.stringify(newTodos))
    return newTodos

})
    }

    // const useList = useContext(todoContext)

    return <todoContext.Provider value={{ todo, handleTodo, handleToggleItems, handleDeleteItem}}>
        {children}
    </todoContext.Provider>
}