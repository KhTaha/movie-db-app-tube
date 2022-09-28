import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/store/AuthenticationSlice'

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}> <App /></Provider>
   {/* <Router>
    <Route path='/' component={Home}/>
    <Route path='/react' component={Subscribed}/>
    </Router> */}
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
