import { combineReducers } from "redux";
import messageInput from "./Reduce";
import { colorThemeApplied, orderInput } from "./Reduce"


const rootReducer = combineReducers({
    messageInput, colorThemeApplied, orderInput
})

export default rootReducer;