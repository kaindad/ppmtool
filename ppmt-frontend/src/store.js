import {applyMiddleware, compose} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}
const middleware = [thunk]

let store;

// configure so that it works with multiple browsers' storage

if(window.navigator.userAgent.includes("Chrome")){
    store = configureStore (
        {reducer : rootReducer}, 
        initialState, 
        compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
        )
    );
} else {
    store = configureStore(
        {reducer : rootReducer}, 
        initialState,
        compose(applyMiddleware(...middleware))
    );
}

export default store;
