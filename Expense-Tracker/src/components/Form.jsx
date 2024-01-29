import React, { useState } from "react";
import "./Form.css";

function Form(props){

    const [ title, setTitle ] = useState('');
    const [ date, setDate ] =   useState('');
    const [ amount, setAmount ] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }


    const submitHandler = (event) =>{

        event.preventDefault();

        const formData = {
            title: title,
            date: new Date(date),
            amount: amount
        }

        props.handleFormData(formData);

        setTitle('');
        setDate('');
        setAmount('');

    } 

    return(
        <div className="form-container">
            <form onSubmit={ submitHandler }>
                <div className="expense-field">
                    <label htmlFor="expense">Title: </label>
                    <input type="text" id="expense"  value={title} onChange={ titleChangeHandler } />
                </div>
                <div className="date-field">
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" value={date} onChange={ dateChangeHandler } />

                    <label htmlFor="cost">Amount: </label>
                    <input type="text" id="cost"  value={amount} onChange={ amountChangeHandler } />

                    <input type="submit" value="Add Expense" />
                </div>
            </form>
        </div>
    );
}

export default Form;