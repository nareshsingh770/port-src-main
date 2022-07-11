import { combineReducers } from "redux";
import messageInput from "./Reduce";
import { colorThemeApplied } from "./Reduce"


const rootReducer = combineReducers({
    messageInput, colorThemeApplied
})

export default rootReducer;