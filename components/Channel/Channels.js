import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import Channel from './NewChannel';
import AddMovies from './AddMovies';
import ChannelCard from '../UI/ChannelCard';
const Channels = (props) => {
    const [channelsData, setChannelData] = useState([]);
    const [newchannel, setNewChannel] = useState(false);
    const [{ movieID, movieURL }, setAddMovie] = useState([]);
    const [showAddMovie, setShowAddMovie] = useState(false);
    const [currentChannel, setCurrentChannel] = useState('');
    const newChannelHandler = () => {
        setNewChannel(true);
    }
    const getchannelData = async () => {
        props.onClick();
        let response = await fetch('https://react-channel-db-default-rtdb.firebaseio.com/.json');
        let data = await response.json();
        let arr = [];

        for (const key in data) {
            const transformedData = {
                channelname: key
            }
            arr.push(transformedData);
        }

        console.log(arr);
        setChannelData(arr);

    }

    const getDatabyChannel = () => {

    }
    const AddMovieToChannelHandler = (event) => {
        setShowAddMovie(true);
        setCurrentChannel(event.target.attributes.channelName.value);
      
    }
    return (<>
        <h2 onClick={getchannelData}>Show Channels</h2>
        {channelsData.length === 0 ? <div>No Channel Found</div> : !props.homeData && !props.searchVal && props.channelVal &&
            <div>
                {channelsData.map((item) => (<h2 onClick={AddMovieToChannelHandler} channelName={item.channelname}>{item.channelname}</h2>))}
            </div>}
        <div>
            {showAddMovie && <AddMovies setAddMovie={setAddMovie} channelName={currentChannel} />}
        </div>
        {props.channelVal && <Link to='/channels/newchannel'>{<Channel onClick={newChannelHandler} channelVal={newchannel} />}</Link>}
        <div>
            {showAddMovie && <ChannelCard currentChannel={currentChannel} />}
        </div>
    </>
    )
}

export default Channels;