import {GET_FORECAST, SET_ERROR, SET_LOADING, ForecastAction, ForecastState} from "../../actions";

const initialState: ForecastState = {
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action: ForecastAction) : ForecastState => {
    switch (action.type) {
        case GET_FORECAST:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}