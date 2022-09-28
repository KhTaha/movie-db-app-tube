import React, { useState } from 'react'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import Login from '../UI/Login';
import Home from '../UI/Home';
import { AuthContext } from '../../App';
import { createContext } from 'react';
import Search from '../store/search';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/AuthenticationSlice';
import Subscribed from '../UI/Subscriptions';
import context from 'react-bootstrap/esm/AccordionContext';
import Channel from '../Channel/NewChannel';
import Channels from '../Channel/Channels';
const Header = (props) => {
    // var contextData=createContext(AuthContext);
    // const{dispatch}=createContext(AuthContext);
    // const reducer=(state,action)=>{
    //     switch(action.type){
    //         case 'Login':

    //     }
    // }
    const dispatch = useDispatch();
    var contextData = createContext(AuthContext);
    const [homeData, showHomeData] = useState(true);
    const [searchdata, showSearchData]=useState(false);
    const[channelData, showChannel]=useState(false);
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const logoutHandler = () => {
        showHomeData(true);
        showSearchData(false);
        dispatch(authActions.logout());

    }
    const searchDataHandler=()=>{
        showSearchData(true);
        showHomeData(false);
    }
    const showSubsDataHandler = () => {
        showHomeData(false);
        showSearchData(false);
        showChannel(false);
    }
    const showHomeDataHandler = () => {
        showHomeData(true);
        showSearchData(false);
        showChannel(false)
    }

    const showChannelHandler=()=>{
        showHomeData(false);
        showSearchData(false);
        showChannel(true);
    }
    return (
        <div>
            <header className='header'>
                <h2>Movie APP</h2>
                {isAuthenticated && <h2>{<Link to='/search'>{<Search homeVal={homeData}  searchVal={searchdata} onClick={searchDataHandler} />}</Link>}</h2> }
                <Link to='/about'>About Page</Link>

                <h2>{<Link to='/'><Home value={homeData} channelVal={channelData} searchVal={searchdata} onClick={showHomeDataHandler} /></Link>}</h2>

                {isAuthenticated && <h2> {<Link to='/subscribe'>{<Subscribed  searchVal={searchdata} channelVal={channelData} onClick={showSubsDataHandler} value={homeData} />}</Link>}</h2>}

                {isAuthenticated && <Link to='/channels'>{<Channels onClick={showChannelHandler} homeData={homeData} searchVal={searchdata} channelVal={channelData}/>}</Link>}
              
                {/* {console.log(props.login)} */}
                {props.login && <button type='submit' className='mt-3 btn btn-primary ' onClick={logoutHandler}>Logout</button>}
            </header>
        </div>
    )
}
export default Header;