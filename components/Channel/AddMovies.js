import { add, set } from 'date-fns';
import React, { useState } from 'react'
const AddMovies=(props)=>{
    const[addMovie,showAddMovies]=useState(false);
    const[moviename,setMovieName]=useState();
    const[movieUrl,setMovieUrl]=useState();
    const addMovieHandler=()=>{
        setMovieName(document.getElementById('moviename').value);
        setMovieUrl(document.getElementById('movieUrl').value);
        props.setAddMovie({
            movieID: moviename,
            movieURL: movieUrl
        })
        const AddMoviesToChannel=async()=>{
            let response = await fetch(`https://react-channel-db-default-rtdb.firebaseio.com/${props.channelName}/.json`, {
                method: 'POST',
                //  headers:{ 'Content-Type': 'text/json' },
                body: JSON.stringify(
                   { name:moviename,
                    url:movieUrl
                }
                )
            });

            if (!response.ok) {
                throw new Error('Data Sending Failed..');
            }
        }

        try{
            AddMoviesToChannel();
            document.getElementById('moviename').value='';
            document.getElementById('movieUrl').value='';
        }
        catch(err){
            console.log(err);
        }
    }
    
      
    return(
        <>
        <h3 onClick={()=>{showAddMovies(true)}}>Add New Movies</h3>
        {addMovie && <form>
        
        <div>
        <label>Movie Name</label>
            <input type='text' id='moviename' ></input>
        </div>
           <div>
               <label>Movie Url</label>
               <input type='url' id='movieUrl'></input>
           </div>
           <div>
               <button id='addMovie' type='submit' onClick={addMovieHandler}>Add Movie</button>
           </div>
           
        </form>
       }

        </>
    )
}
export default AddMovies;