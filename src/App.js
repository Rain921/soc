import React from 'react';
//import logo from './logo.svg';
import {Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";






const App = (props) => {


  return (
      <div className="app_wrapper">
        <Header/>
        <Nav state={props.state.sidebar} />
        <div className="app_content">
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage} /> }/>
          <Route path='/profile' render={() =>  <Profile state={props.state.messagePage} addPost={props.addPost}/>}/>
          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
);

};

export default App;
