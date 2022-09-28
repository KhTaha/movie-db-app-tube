import React,{useState} from 'react'
import movies from '../UI/movies';

const FetchMovieData=()=>{
    const [movieData, setMovieData]=useState([]);
   
    // event.target.text="Subscribed"
    const getRequestHandler=async()=>{
       let response=await fetch('https://react-movie-db-cbef6-default-rtdb.firebaseio.com/movies.json');
       let data=await response.text();
       setMovieData(data)
       console.log(movieData);
    }

    const items=[...movies];

    const data=items.find((item)=>item.id===movieData)
    console.log(data);

    return(
        getRequestHandler()
    )
}
export default FetchMovieData;