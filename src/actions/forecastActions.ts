import {ThunkAction} from 'redux-thunk';
import {RootState} from "../store";
import {GET_FORECAST, SET_ERROR, SET_LOADING, ForecastAction, ForecastData, ForecastError} from "./index";

export const getForecast = (city: string): ThunkAction<void, RootState, null, ForecastAction> => {
    return async dispatch => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&lang=fr&appid=${process.env.REACT_APP_API_KEY}`);

            if (!response.ok) {
                const resData: ForecastError = await response.json();
                throw new Error(resData.message);
            }

            const resData: ForecastData = await response.json();
            dispatch({
                type: GET_FORECAST,
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

export const setLoadingForecast = (): ForecastAction => {
    return  {
        type: SET_LOADING
    }
}

export const setErrorForecast = (): ForecastAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}
