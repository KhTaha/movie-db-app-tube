import logo from './logo.svg';
import './App.css';
import Login from '../src/components/UI/Login'
import Header from './components/Header/Header'
import { createContext, useState, useContext } from 'react';
import { Route, Routes, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from './components/UI/Home';
import Search from './components/store/search';
export const AuthContext = createContext(null);


function App() {
  var initialState = useState({
    isSubscribed: true
  })
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  const [login, setIsLogin] = useState(false);

  const loginHandler = () => {

    setIsLogin(true);
  }
  // console.log(login)
  //console.log("Is "+ isAuthenticated);
  return (
    <Router>
      <AuthContext.Provider value={initialState}>
        <Header login={isAuthenticated} initialState={initialState} />
        <MainPage />
        {<Login onClick={loginHandler} isAuth={isAuthenticated} />}
      </AuthContext.Provider>
    </Router>
  )
}

const MainPage = () => {
  return (<Routes>
    <Route exact path='/about' element={<AboutPage />} />
    <Route path='/' />
    <Route path='/search' />
    <Route path='/channels/newchannel'/>
    <Route path='/channels'/>
  </Routes>);
}

const AboutPage = () => {
  return (<h1>I am about page</h1>);
}

export default App;
