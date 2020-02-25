import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'


const firstReducer = (state = 0, action) => {
    if(action.type === 'BUTTON_ONE'){
        console.log('this is state1', state);
        console.log("Hello, I'm a reducer", action.type);
        return state + 1;
    }
    return state;
}

const secondReducer = (state = 100, action) => {
    if (action.type === 'BUTTON_TWO') {
        console.log('this is state2', state);
        console.log("Hello, I'm also a reducer", action.type);
        return state - 1;
    }
    return state;
}

const thirdReducer = (state = [], action) => {

        switch (action.type){
            case 'ADD_ELEMENT':
                return [...state, action.payload];
                default:
                    return state;
        }
    }
    

const storeInstance = createStore (
    combineReducers({
        firstReducer,
        secondReducer,
        thirdReducer
        
    })    
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
