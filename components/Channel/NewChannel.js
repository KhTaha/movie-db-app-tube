import React, { useState } from 'react'
import ImageUpload from 'image-upload-react';
import 'image-upload-react/dist/index.css'
import { render } from '@testing-library/react';
import Channels from './Channels';
import { Link } from 'react-router-dom';
import AddMovies from './AddMovies';

const Channel = (props) => {
    //  let channels=[ ];
    //  channels.push(channelName.value)
    //  console.log(channels);
    const [imageSrc, setImageSrc] = useState('');
    const [{ file, imagePreview }, setState] = useState('');
    const[{movieID,movieURL},setAddMovie]=useState([]);
    const[showAddMovie,setShowAddMovie]=useState(false);
    const [errorstate,setErrorState]=useState(false);
    const setImageHandler = (event) => {
        event.preventDefault();
       // setImageSrc(URL.createObjectURL(event.target.files[0]));
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            setState({
                file: file,
                imagePreview: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const createChannelHandler = () => {

        const channelName = document.getElementById('channelname');
        //let updatedChannels=[...channels,channelName.value]
        const createChannel = async () => {
            let response = await fetch(`https://react-channel-db-default-rtdb.firebaseio.com/${channelName.value}.json`, {
                method: 'POST',
                //  headers:{ 'Content-Type': 'text/json' },
                body: JSON.stringify(
                   { name:channelName.value
                }
                )
            });

            if (!response.ok) {
                throw new Error('Data Sending Failed..');
            }
            setShowAddMovie(true);

        }
        try {
           // createChannel();
           if(channelName.value.length!=0 && channelName.value !=null){
            createChannel();
            setErrorState(false);
            channelName.value='';
           }
           else{
             setErrorState(true);
           }

        }
        catch (err) {
            console.log(err);
        }
    }
 
  
        
            return (<>
           {/* {props.channelVal && <Link to='/channels'>{<Channels/>}</Link> } */}
                <h2 onClick={props.onClick}>New Channel</h2>
                {props.channelVal && <form >
                    <div>
                        <label htmlFor='channelname'>Channel Name</label>
                        <textarea id='channelname' placeholder='give atleast three letter name'></textarea>
                        {errorstate && <span>Please specify Channel Name</span>}
                        <button type='submit' onClick={createChannelHandler} >Create Channel</button>
                    </div>
                    {/* ()=>(document.getElementById('channelname').value.length>2? createChannelHandler:<span>"Kindly specify channel Name"</span>)  */}
                    <div>
                        
                        {/* <ImageUpload
                            handleImageSelect={setImageHandler}
                            imageSrc={imageSrc}
                            setImageSrc={setImageSrc}
                            
                        /> */}
                        {/* <input type='file' onClick={setImageHandler}/>
                        <button type='button' onClick={handleSubmit}>Add File</button> */}

                    </div>
                   
                </form>                
                }
                {/* {
                    showAddMovie && <AddMovies setAddMovie={setAddMovie}/>
                } */}
                {/* <div>
                        <img src={imagePreview}/>
                    </div> */}
                {/* {$imagePreview} */}
                </>

            )
        
            }
    
    export default Channel;