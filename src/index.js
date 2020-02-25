import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'


const firstReducer = (state, action) => {
    if(action.type === 'BUTTON_ONE'){
        console.log("Hello, I'm a reducer", action.type);
    }
    return {};
}

const secondReducer = (state, action) => {
    if (action.type === 'BUTTON_TWO') {
        console.log("Hello, I'm also a reducer", action.type);
    }
    return {};
}

const storeInstance = createStore (
    combineReducers({
        firstReducer,
        secondReducer
    })    
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
