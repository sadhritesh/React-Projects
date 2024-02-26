import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setInput, setIsUpdating, editTodo } from "../features/todoSlice";

export default function Todos(){

    const todos =  useSelector(state=>state.todos)
    const isUpdating = useSelector(state=>state.isUpdating)
    const input = useSelector(state=>state.input)

    const dispatch = useDispatch()

    const deleteHandler = (id) =>{
        dispatch(deleteTodo(id))
    }

    const editHandler = (text) =>{
        dispatch(setInput(text))
        dispatch(setIsUpdating(true))
    }

    const saveHandler = (id) =>{
        dispatch(editTodo({id, text: input}))
        dispatch(setIsUpdating(false))
        dispatch(setInput(''))
    }

    return (
        <>
        <div className="text-[20px] font-bold">Todos</div>
        <ul className="list-none">
            {todos.map((todo) => (
              <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
              >
                <div className='text-white'>{todo.text}</div>

                <div>
                    <button
                    onClick={(e) => deleteHandler(todo.id) }
                    className="text-white bg-red-500 border-0 py-1 px-4 mx-2 focus:outline-none hover:bg-red-600 rounded text-md"
                    >
                        Delete
                    </button>
                    <button
                    onClick={(e) => editHandler(todo.text) }
                    className="text-white bg-red-500 border-0 py-1 px-4 mx-2 focus:outline-none hover:bg-red-600 rounded text-md"
                    hidden={isUpdating}
                    >
                        Edit
                    </button>
                    <button
                    onClick={(e) => saveHandler(todo.id) }
                    className="text-white bg-red-500 border-0 py-1 px-4 mx-2 focus:outline-none hover:bg-red-600 rounded text-md"
                    hidden={!isUpdating}
                    >
                        Save Changes
                    </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )
    }