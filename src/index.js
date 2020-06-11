import * as serviceWorker from './serviceWorker';
import {rerenderEnTree} from "./render";
import state from "./redux/state";

// перекидываем ul в рендр.js чтобы вызвать функцию через стайт.js и стейт кидаем через пропсы в функцию , чтобы не было циклической зависимости
rerenderEnTree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
