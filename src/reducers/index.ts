import {combineReducers} from "redux";

//reducers
import weather from "./weather/reducer";
import alert from "./alert/reducer";
import forecast from "./forecast/reducer"

export default combineReducers({
    weather,
    alert,
    forecast
})