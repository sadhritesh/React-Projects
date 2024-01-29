import React from "react";
import "./ExpenseItem.css"



function ExpenseItem({details:{date, title, amount}}){

    let dateObj = new Date(date);

    const taarik = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return (
        <>
        <div className="expense-item">
            <div className="expense-details">
                <p>{`${taarik}-${month}-${year}`}</p>
                <p>{ title }</p>
            </div>
            <div className="expense-cost">
                { `₹${amount}` }
            </div>
        </div>
        </>
    );
}

export default ExpenseItem;