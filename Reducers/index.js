import { combineReducers } from "redux";
import messageInput from "./Reduce";
import { colorThemeApplied, orderInput, text_input, weather_set } from "./Reduce"


const rootReducer = combineReducers({
    messageInput, colorThemeApplied, orderInput, text_input, weather_set
})

export default rootReducer;