import {createStore} from "redux";

const actions = {
    "INC": (state, payload) => state + payload
    , "DEC": (state, payload) => state - payload
}

const reducer = (state, action)=> actions[action.type] ? actions[action.type](state, action.payload) : state

const store = createStore(reducer, 0);

store.subscribe(()=>{
    console.log("store changed", store.getState());
})

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 22});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1000});
