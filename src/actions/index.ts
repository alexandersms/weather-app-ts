export const GET_WEATHER = 'GET_WEATHER';
export const GET_FORECAST = 'GET_FORECAST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface List {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
        day: number;
        min:number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    },
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    },
    pressure: number;
    humidity: number;
    weather: Weather[],
    speed: number;
    deg: number;
    clouds: number;
    pop: number;
    rain: number;
}

export interface WeatherData {
    base: string,
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
        speed: number;
        deg: number;
    }
}

export interface ForecastData {
    city: {
        id: number;
        name: string;
        coord: {
            lon: number;
            lat: number;
        },
        country: string;
        population: number;
        timezone: number;
    },
    cod: string;
    message: number;
    cnt: number;
    list: List[]
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string
}

export interface ForecastError {
    cod: string;
    message: string;
}

export interface ForecastState {
    data: ForecastData | null;
    loading: boolean;
    error: string
}

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface GetForecastAction {
    type: typeof GET_FORECAST;
    payload: ForecastData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;
export type ForecastAction =  GetForecastAction |  SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}