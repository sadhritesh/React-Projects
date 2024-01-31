import React, { useCallback, useEffect, useState } from "react";

export default function Test(){

    const [flag, setFlag] = useState(true);

    const [count, setCount] = useState(3);

    function flagHandler(){
        setFlag(prevFlag=>!prevFlag)
    }


    function clickHandler(){
        setCount(preCount=>preCount+1)
    }


    console.log(flag);
    function func1(){
        console.log("func1 executed");
    }
    
    useEffect( ()=>{
        console.log("func1 rendered");
        func1()
    },[func1] )


    const func2 = useCallback(()=>{
        console.log("func2 executed");
    },[flag])

    useEffect( ()=>{
        console.log("func2 rendered");
        func2()
    },[func2] )

    return (
        <>
        <div>{count}</div>
        <button onClick={ clickHandler } >Increament</button>
        <button onClick={ flagHandler } >Change Flag Value</button>
        </>
    );
}