import React, { useEffect, useState } from 'react'
import movies from '../UI/movies';
const useFetch=(run)=>{
//const [response, setResponse]=useState({});
const[loading,setLoading]=useState(true);

useEffect(()=>{
if(run){
    const fetchData=async=>{
        setLoading(true);
        try{           
            // setResponse(movies);
            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchData();
}
},[run,movies]);
return{loading}
}

export default useFetch;