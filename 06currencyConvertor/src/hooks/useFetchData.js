import { useState, useEffect } from "react"

function useFetchData(currency){

    const [data, setData] = useState({})

    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            // console.log(res);
            setData(res[currency])
        })
        .catch(error=>console.log("Error :",error))
    },[currency])

    return data;
}

export default useFetchData;