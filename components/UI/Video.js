import React, { Component, useEffect, useState,createContext } from 'react'
import ReactPlayer from 'react-player'
import movies from './movies';
import './Video.css';
import { useSelector } from 'react-redux';
import Card from './Card';

const Video = () => {
    const items = [
        ...movies
    ];
   // var contextData=createContext(AuthContext);
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const subcribeHandler = (event) => {
        // const currBtnId = event.target.id;
        let currItem = event.target;
        let newItem = {
            // id:currItem.id,
            url: currItem.value,
            id:currItem.id,
            rating:currItem.attributes.rating,
             name:currItem.attributes.name.value,
            // artist:currItem.artist
        }
        console.log(newItem);
        // const a = items.findIndex((item)=>{
        //     return item.id === currBtnId;
        // });

        // console.log(a);

        // setBtnClick(true)
        // event.target.text="Subscribed"
        const sendRequest = async () => {
            const response = await fetch('https://react-movie-db-cbef6-default-rtdb.firebaseio.com//movies.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    newItem
                )
            });
            if (!response.ok) {
                throw new Error('Data Sending Failed..');
            }
        }


        try {
            if (isAuthenticated) {
                sendRequest();

                // setTimeout(()=>{
                //     changeText("Subscribe");
                // },1000)
            }
            else {
                alert("Please Login First To Subscribe");
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return  (<>
            {items.map((item) => (
                <div>
                <Card item={item} subsHandler={subcribeHandler} btnText="Subscribe"/>
                </div>
                ))
            }
        </>)
    
}
export default Video;