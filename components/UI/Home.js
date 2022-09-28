import React, { createContext, useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Video from './Video';
import './Home.css'
import Subscription from './Subscriptions';
import Subscribed from './Subscriptions';
import { AuthContext } from '../../App';
import { authActions } from '../store/AuthenticationSlice';
const Home=(props)=>{
   var contextData=createContext(AuthContext);
   const isAuthenticated=useSelector(state=>state.isAuthenticated);
    return(
        <div>
        {/* <header className='header'>
            <h2>HOME</h2>
        </header> */}
        {isAuthenticated && <h2 onClick={props.onClick}>Home</h2>}
       {props.value && !props.searchVal &&  <Video/>   }        
        </div>
      
    )
}
export default Home;