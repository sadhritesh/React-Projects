import { MyContext } from "../context/userContext";
import { useContext } from "react"; 


function ShowUsers(){

    const { name, age } = useContext(MyContext)

    return(
        <>
        <h3>My name is {name} and my age is {age} </h3>
        </>
    );
}

export default ShowUsers;

