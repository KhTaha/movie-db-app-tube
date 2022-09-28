import React from 'react'
import { useState } from 'react';
const Button=(props)=>{

    const [btnSubscribed, setSubscribed]=useState("Subscribe");
    const [btnClick, setBtnClick]=useState(false);
    if(btnClick && props.btnId){
        setSubscribed("Subscribed");
    }
    const changeText=(text)=>{setSubscribed(text)}
    //   items.map((item)=>{
    //       item.url=songs.albumArt;
    //   })

    //const item[]= {items.map((item)=>items.albumArt)}
    const changeTextHandler=()=>{
        changeText("Subscribed");
    }
    return(
<div>
<button id={props.id} type='button' />

</div>
    )

}
export default Button;