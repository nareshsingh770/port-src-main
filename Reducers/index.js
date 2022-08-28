import { combineReducers } from "redux";
import messageInput from "./Reduce";
import { colorThemeApplied, orderInput, weather_data, weather_set } from "./Reduce"


const rootReducer = combineReducers({
    messageInput, colorThemeApplied, orderInput, weather_set, weather_data
})

export default rootReducer;