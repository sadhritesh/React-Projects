import { useState } from "react";
import { useEffect } from "react";
import './Github.css'
import { useLoaderData } from "react-router-dom";

export default function Github(){

    const data = useLoaderData()

    // const [ data, setData ] = useState({})
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])

    return (
        <>
        <div className="github">
            <h3>Hitesh's Followers: {data.followers}</h3>
        </div>
        </>
    );
}

export async function fetchData(){
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    console.log(data);
    return data;
}