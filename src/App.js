import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
  return [
    <div className="app_wrapper">
      <Header />
      <Nav />
      <div className="app_content">
        <Dialogs />
      </div>
      {/* <Profile />*/}

    </div>
  ];

};

export default App;
