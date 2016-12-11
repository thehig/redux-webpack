// Source: https://github.com/learncodeacademy/react-js-tutorials/

// Redux
import { applyMiddleware, createStore, combineReducers } from "redux";

// middleware
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

/* // Single store with multiple reducers
const userActions = {
    "CHANGE_NAME": (state, payload)=> Object.assign({}, state, {name: payload})
    , "CHANGE_AGE": (state, payload)=> Object.assign({}, state, {age: payload})
};``

// Note: Default state is now set in the reducer instead of the store
const userReducer = (state={"name": "", "age": 0}, action)=> userActions[action.type] ? userActions[action.type](state, action.payload) : state

const tweetsActions = {
    "FETCH_TWEETS_START": (state)=> {console.log("Fetching tweets"); return state;}
    , "FETCH_TWEETS_FULFILLED": (state)=> {console.log("Got tweets"); return state.concat({}, {}, {});}
};
const tweetsReducer = (state=[], action)=> tweetsActions[action.type] ? tweetsActions[action.type](state, action.payload) : state;

import { combineReducers } from "redux";

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

const store = createStore(reducers, middleware);
*/

// Actions, Initial state and reducer
const actions = {
    "FETCH_USERS_PENDING": (state)=> ({...state, fetching: true})
    , "FETCH_USERS_FULFILLED": (state, payload)=> ({...state, fetching: false, users: payload})
    , "FETCH_USERS_REJECTED": (state, payload)=> ({...state, fetching: false, error: payload})
};

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

const reducer = (state=initialState, action) => actions[action.type] ? actions[action.type](state, action.payload) : state;


// Apply middleware and create store
const middleware = applyMiddleware(
    promise()
    , thunk
    , logger()
);
const store = createStore(reducer, middleware);


// Pub/sub
console.log("starting store", store.getState());
store.subscribe(()=>{
    console.log("store changed", store.getState());
});

/* // Dispatch using thunk middleware

// XHR
import axios from "axios";

// Thunk allows usage of a function instead of an action
//  This function can dispatch multiple actions using the provided dispatch fn
//  https://github.com/gaearon/redux-thunk
store.dispatch((dispatch)=>{
    dispatch({type: "FETCH_USERS_PENDING"});

    axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((response)=>{
            dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data});
        })
        .catch((err)=>{
            dispatch({type: "FETCH_USERS_REJECTED", payload: err});
        });
});
*/


/* // Using promise middleware
// The redux promise middleware automagically wraps promises for us
//  Actions are generated from the type and '_PENDING', '_FULFILLED' or '_REJECTED'
store.dispatch({
    type: "FETCH_USERS"
    , payload: axios.get("http://rest.learafaadfasfncode.academy/api/wstern/users")
});
*/