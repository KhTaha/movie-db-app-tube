import React, { useEffect , useState} from "react";
import ReactPlayer from "react-player";
import Button from "./Button";

const ChannelCard=(props)=>{
    const[channelsData,setChannelData]=useState([]);
    const channelName=props.currentChannel;

    const channelDataHandler=()=>{
        const getchannelData=async()=>{
           
            let response=await fetch(`https://react-channel-db-default-rtdb.firebaseio.com/${channelName}.json`);
            let data=await response.json();
            let arr=[];
           
                for(const key in data){
                    const transformedData={
                        channelname:data[key].name,
                        url:data[key].url
                    }
                    arr.push(transformedData);
                }
            
            console.log(arr);
            setChannelData(arr);
        
        }
        try{
            getchannelData();
        }
        catch(err){
            console.log(err);
        }
    }
       
    
   
    return(
        <>
        <div onClick={channelDataHandler}>{props.currentChannel}</div>
             {channelsData.length>1? channelsData.map((item)=>
           ( <div className='box col-md-4' >
                    <ReactPlayer
                        // className='react-player fixed-bottom'

                        // url= 'https://www.youtube.com/watch?v=3M5iHWetiJA'
                        key={item.key}
                        url={item.url}
                        width='300px'
                        height='300px'
                        controls={true}

                    />
                    <h3>{item.channelname}</h3>
                    <Button id={item.channelname} rating={item.rating} name={item.channelname} value={item.albumArt} text="Subscribe" >Subscribe</Button>

                   {item.rating!=0? <div >
                        <h3>Rating : <span>{`${item.rating}`}</span></h3>
                    </div>: '' }
                </div>)):<div>'No data found'</div>}
        </>
       
         
    )
    
}

export default ChannelCard;