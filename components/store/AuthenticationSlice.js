import { createSlice, configureStore } from "@reduxjs/toolkit";
import { AuthContext } from '../../App';
import { createContext } from 'react';
const authState={isAuthenticated:false};

const authSlice=createSlice({
    name:"auth",
    initialState:{authState
    },
    reducers:{
        login(state){
            state.isAuthenticated=true
        },
        logout(state){
            var contextData=createContext(AuthContext);
            contextData.isSubscribed=true
            state.isAuthenticated=false
        }
    
    }
})
const store=configureStore({
    reducer:authSlice.reducer
})
export default store;
export const authActions=authSlice.actions;