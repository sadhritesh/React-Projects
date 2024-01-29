import React, { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";
import "./App.css"

let DUMMY_EXPENSES = []

function App() {

  const [expenses, updateExpense] = useState(DUMMY_EXPENSES);

  function fetchData(){
    fetch("http://localhost:3000/expenses")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      updateExpense(data);
    })
    .catch(error => {
      console.log("Error : ", error);
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  function formDataHandler(formData){
    fetch("http://localhost:3000/expenses",{
      method: "POST",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      console.log(response);
      fetchData();
    })
    .catch(error => console.log("Error : ",error))
  }

  return (
    <>
      <div className="container">
        <Form handleFormData={formDataHandler} />
        {
          expenses.map((expense)=><ExpenseItem key={expense.id} details={expense}/>)
        }
      </div>
    </>
  )
}

export default App
