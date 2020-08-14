import React, {FunctionComponent} from 'react'
import {ForecastData} from "../../actions";

interface ForecastProps {
    data: ForecastData;
}

// Format Date
const dateFormat = (timestamp:number) => {
    const newDate = new Date(timestamp * 1000);
    const days = ["DIM","LUN","MAR","MER","JEU","VEN","SAM"];

    return days[newDate.getDay()]
}

const Forecast: FunctionComponent<ForecastProps> = ({data}) => {
    //const [state, setState] = useState({data, datas: null, isShow: false});

    // Toggle Details Forecast
    /*
    const toggleDetailsForecast = (index:number) => void {
        setState({ ...state:string, datas: state.data[index] })
    }

    const toggleDetailsForecastStyles = (index:number) => void {
        if (state.data[index] === state.datas) {
            return "visible";
        } else {
            return "hidden";
        }
    }
*/

    return (
        <div className="future-weather text-sm bg-gray-700 px-6 py-8 overflow-hidden rounded-b">
            {

                data.list.map((list, index) => (
                    <div key={index}>
                        <div className="flex items-center cursor-pointer px-3 py-1 hover:bg-gray-600 hover:opacity-75 hover:shadow">
                            <div className="w-1/6 text-sm text-gray-200">{dateFormat(list.dt)}</div>
                            <div className="w-4/6 flex items-center">
                                <div style={{ width: "65px" }}>
                                    <img src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`} alt="ico-meteo"/>
                                </div>
                                <div className="ml-3">{list.weather[0].description}</div>
                            </div>
                            <div className="w-1/6 text-right">
                                <div>{Math.round(list.temp.min)}&deg;</div>
                                <div>{Math.round(list.temp.max)}&deg;</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between bg-gray-800 px-2">
                            <div>
                                <div className="text-sm text-blue-200 float-left">
                                    <div>Matin : <strong>{Math.round(list.temp.morn)}</strong>&deg; </div>
                                    <div>Jour  : <strong>{Math.round(list.temp.day)}</strong>&deg; </div>
                                    <div>Soir  : <strong>{Math.round(list.temp.eve)}</strong>&deg; </div>
                                    <div>Nuit  : <strong>{Math.round(list.temp.night)}</strong>&deg; </div>
                                </div>

                                <div className="text-sm text-blue-400 mx-16 float-right">
                                    <div>Pression  : <strong>{Math.round(list.pressure)}</strong></div>
                                    <div>Humidité  : <strong>{Math.round(list.humidity)}</strong>% </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))

            }
        </div>
    )
}

export default Forecast;