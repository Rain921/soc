import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return [
    <BrowserRouter>
      <div className="app_wrapper">
        <Header/>
        <Nav/>
        <div className="app_content">
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  ];

};

export default App;
