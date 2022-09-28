import React from "react";
import ReactPlayer from 'react-player'
import { Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from "react-redux";
export const Card = (props) => {
  const ratingChanged = (newRating) => {
    props.item.rating=newRating;
   // console.log(newRating);
  };
  const isAuthenticated = useSelector(state => state.isAuthenticated);
   
return(
  <div className='box col-md-4' >
                    <ReactPlayer
                        // className='react-player fixed-bottom'

                        // url= 'https://www.youtube.com/watch?v=3M5iHWetiJA'
                        key={props.item.id}
                        url={props.item.url}
                        width='300px'
                        height='300px'
                        controls={true}

                    />
                    <h3>{props.item.name}</h3>
                {isAuthenticated &&   <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />}
                   
                  {
                    <Button id={props.item.id} rating={props.item.rating} name={props.item.name} value={props.item.url} text={props.btnText} onClick={props.subsHandler}>{props.btnText}</Button>
                  }
                    {/* <div>
                        <h3>Rating : <span>{`${props.item.rating}`}</span></h3>
                    </div> */}
                </div>
)
};
export default Card;