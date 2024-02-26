import { MyContext } from "../context/userContext";
import { useContext } from "react";

export default function(){

    const {name, age} = useContext(MyContext)

    return (
        <h3>My name is {name} and age is {age} </h3>
    );
}