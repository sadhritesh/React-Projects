import React from "react";
import "./InputBox.css";

function InputBox({
    label, 
    amount, 
    setAmount,
    currencyOptions = [],
    selectedCurrency,
    onChangeSelectedCurrency,
    convertedAmount,
    isDisabled = false
}){
    // console.log(currencyOptions);
    return (
            <div
            className="wrapper"
            >
                <div className="upper">
                    <div>{label}</div>
                    <div>Currency Type</div>
                </div>
                <div className="lower">
                    <input 
                        type="number" 
                        placeholder="Amount"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        disabled = {isDisabled}
                    />
                    <select 
                        value={selectedCurrency}
                        onChange={(e)=>{onChangeSelectedCurrency(e.target.value)}}
                    >
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
    );
}

export default InputBox;