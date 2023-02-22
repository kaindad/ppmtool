import { combineReducers } from "@reduxjs/toolkit"
import errorReducer from "./errorReducers"

const rootReducer = combineReducers({
    errors: errorReducer
})
export default rootReducer