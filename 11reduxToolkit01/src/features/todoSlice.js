import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id:1, text: "Shopping"}
    ],
    input: '',
    isUpdating:false
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        setInput:(state,action)=>{
            state.input = action.payload
            // console.log(state.input);
        },
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            state.input = ''
        },
        deleteTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>(
                todo.id != action.payload
            ))
        },
        editTodo: (state,action)=>{
            const {id,text} = action.payload
            state.todos = state.todos.map(todo=>(
                todo.id === id ? {...todo,text: text} : todo
            ))
        },
        setIsUpdating: (state,action)=>{
            state.isUpdating = action.payload
        }
    }
})

export const { setInput, addTodo, deleteTodo, setIsUpdating, editTodo } = todoSlice.actions

export default todoSlice.reducer