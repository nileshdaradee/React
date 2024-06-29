import { createContext,useContext } from "react";


export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
});

export const useTOdo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider