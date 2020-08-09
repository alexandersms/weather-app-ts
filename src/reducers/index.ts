import {combineReducers} from "redux";

import weather from "./weather/reducer";
import alert from "./alert/reducer";

export default combineReducers({
    weather,
    alert
})