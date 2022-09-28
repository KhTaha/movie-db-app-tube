import React, { createContext, useContext,useCallback, useState } from 'react';
import { AuthContext } from '../../App';
import './Login.module.css';
import { authActions } from '../store/AuthenticationSlice';
import Home from './Home';
import { useDispatch } from 'react-redux';
const Login = (props) => {
    const [error, setErrorMessage] = useState({});
    const [isSubmit, setIsSubmitted] = useState(false);

    const dispatch = useDispatch();

    // const initialState = {
    //     isSubmitted: false
    // }
    // const [data, setData] = useState(initialState);
    // const clickHandler = (event) => {
    //     setData({ ...data, isSubmitted: isSubmit })
    // }
    const formdata = [{
        username: "Taha",
        pass: "1234"
    },
    {
        username: "Ali",
        pass: "4321"
    }
    ]
    const errors = {
        username: "Invalid Username",
        password: "Invalid Password"
    };
    const errorMessage = (name) =>{
        name === error.name && (
            <span className='error' >{error.message}</span>
        )}
     
        
        //   event => {
        //     const { name, value } = event.target;
        //     setInputValues({ ...inputValues, [name]: value });
        //   };
        //   const checkNull=(val)=>{
              
        //   }
    const submitHandler = (event) => {
      
        event.preventDefault();
        var { username, password } = document.forms[0];
    //        
        const userData = formdata.find((user) => user.username === username.value);

        if (userData) {
            if (userData.pass !== password.value) {
                setErrorMessage({ name: "password", message: errors.password })
            }
            else {
                setIsSubmitted(true);
                dispatch(authActions.login());

            }
        }
        else {
            setErrorMessage({ name: "username", message: errors.username })
        }

    }

    const renderform = (
        <form onSubmit={submitHandler}>
            <div >
                <label htmlFor='username'>UserName</label>
                <input id='username' name='username' type='text' placeholder='Write your name here'></input>
                {errorMessage("username")}
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' name='password' type='password' placeholder='Password'></input>
                {errorMessage("password")}
            </div>
            <button type='submit' className="button-container" onClick={props.onClick} >Login</button>

        </form>
    )
    return (
        <div>
        {/* {isSubmit? renderform:''} */}
            {props.isAuth &&
                isSubmit ? <></> : renderform
            }
        </div>
    );

}
export default Login;