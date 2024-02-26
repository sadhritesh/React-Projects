import React from "react"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <div className="px-5">
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
