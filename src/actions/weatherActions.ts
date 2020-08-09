import {ThunkAction} from 'redux-thunk';
//import axios from 'axios'
import {RootState} from "../store";
import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError} from "./index";

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`);

            if (!response.ok) {
                const resData: WeatherError = await response.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await response.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });

        } catch (e) {
            dispatch({
                type: SET_ERROR,
                payload: e.message
            });
        }
    }
}

export const setLoading = (): WeatherAction => {
    return  {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}
