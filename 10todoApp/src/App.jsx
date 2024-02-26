import { useState } from 'react'
import {todoContext} from './contexts/todoContext.js'
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';
import { useEffect } from 'react';

function App() {

  const [ todos, setTodos ] =  useState([]);

  const addTodo = (todo) => {
    setTodos((prev)=>([{...todo, id:Date.now()}, ...prev]))
  }

  const updateTodo = (id,todo) => {
    console.log(id);
    setTodos((prev)=>(prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo))))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((prevTodo)=>(prevTodo.id !== id))))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => (prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed }:prevTodo))))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <todoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-2">
                  <TodoForm />
              </div>

              <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo)=>(
                    <div key={todo.id} className='w-full'>
                        <TodoItem todo={todo} />
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </todoContext.Provider>
  )
}

export default App