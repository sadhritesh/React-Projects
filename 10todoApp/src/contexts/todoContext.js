import { useContext, createContext } from "react";

export const todoContext =  createContext({
    todos: [
        {
            id:1,
            todo: "Your todo title",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {}
})


//creating custom-hook so that we'll not required to import todoContext on every file 

export const useTodo = () =>{
    return useContext(todoContext)
}