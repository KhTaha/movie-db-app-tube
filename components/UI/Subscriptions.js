import { id } from 'date-fns/locale';
import React, { createContext, useState } from 'react'
import Card from './Card';
import ReactPlayer from 'react-player'
import { Button } from 'react-bootstrap';
import FetchMovieData from '../store/fetchmovie';
import movies from './movies';
import { AuthContext } from '../../App';
const Subscribed = (props) => {

    const [movieData, setMovieData] = useState([]);
    const [showmovie, setshowMovie] = useState(false);
    const[customrating, setCustomRating]=useState('');
    // var contextData=createContext(AuthContext); 

    const setCustomRatingHandler=()=>{
      setCustomRating();
    }
    // event.target.text="Subscribed"
    const getRequestHandler = async () => {
        let response = await fetch('https://react-movie-db-cbef6-default-rtdb.firebaseio.com/movies.json');
        let data = await response.json();
        setshowMovie(true);
        props.onClick();
     // contextData.isSubscribed=false;

        // let dummydata=[];
        // setMovieData(data)
        // console.log(data);
        let arr = [];
        if(data.length != 0){
          for (const key in data) {
            const transformedData = {
                id: data[key].id,
                url: data[key].url,
                rating:data[key].rating,
                name:data[key].name
            }
            arr.push(transformedData);
        }
        setMovieData(arr);
        }
        else{
          alert("No Data Found");
        }
      
        // const items = [...movies];

        //        dummydata=items.filter(
        //            (item)=>item.id == arr.id)

        //     console.log(dummydata);

    }


    // const [data] = items.map((item) => item.id);
    // })

    // console.log(data);


    // .then((response)=>{
    //     return response.json();
    // })
    // .then((data)=>{
    //     setMovieData(data.results)
    // })
    // then((data)=>{
    //     const movieData=data.results.map(())
    // })

    // const sendRequest = async () => {
    //     const response = await fetch('https://react-movie-db-cbef6-default-rtdb.firebaseio.com//movies.json', {
    //         method: 'GET',
    //         body: JSON.stringify(
    //             currItem
    //         )
    //     });
    //     if (!response.ok) {
    //         throw new Error('Data Sending Failed..');
    //     }
    // }
    console.log(movieData);

    const unSubcribeHandler = (event) => {
      {console.log(event.target.item.rating)};
    }

    return (<>
        {/* <button type='button' onClick={getRequestHandler}>Subscriptions</button> */}
        <h3 onClick={getRequestHandler}>Subscription</h3>
        { movieData.map(item => (
         !props.value && !props.searchVal && !props.channelVal && (
           <Card onClick={unSubcribeHandler} item={item} btnText="Unsubscribe"/>
           
         ))

        )}
        </>
    )
}
export default Subscribed;