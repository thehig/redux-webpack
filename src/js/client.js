import { createStore, combineReducers } from "redux";

// Simple number reducer
// const actions = {
//     "INC": (state, payload) => state + payload
//     , "DEC": (state, payload) => state - payload
// }

// const reducer = (state, action)=> actions[action.type] ? actions[action.type](state, action.payload) : state

const userActions = {
    "CHANGE_NAME": (state, payload)=> Object.assign({}, state, {name: payload})
    , "CHANGE_AGE": (state, payload)=> Object.assign({}, state, {age: payload})
};

const userReducer = (state={"name": "", "age": 0}, action)=> userActions[action.type] ? userActions[action.type](state, action.payload) : state


const tweetsActions = {

};

const tweetsReducer = (state=[], action)=>{
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(()=>{
    console.log("store changed", store.getState());
});

console.log("starting store", store.getState());

store.dispatch({type: "CHANGE_NAME", payload: "Ben"});
store.dispatch({type: "CHANGE_AGE", payload: 50});
store.dispatch({type: "CHANGE_NAME", payload: "Fernando"});
store.dispatch({type: "CHANGE_AGE", payload: 75});
