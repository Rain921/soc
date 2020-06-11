import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";  // ипорт функции из стейта
import {BrowserRouter} from "react-router-dom";


// функция перересовывает ui
export let rerenderEnTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </ BrowserRouter>, document.getElementById('root'));
};


