import React, { FunctionComponent } from "react";
import {WeatherData} from "../../actions";

interface WeatherProps {
    data: WeatherData;
}

const Weather: FunctionComponent<WeatherProps> = ({ data }) => {
    return (
        <div className="weather-container font-sans bg-gray-800 mt-4 rounded-lg shadow-lg overflow-hidden w-128">

            {/* Current weather */}
            <div className="current-weather flex items-center justify-between px-6 py-8">
               <div className="flex items-center">
                   <div>
                       <div className="text-6xl font-semibold">{data.main.temp.toFixed(0)}&deg;C</div>
                       <div>{data.main.temp_max.toFixed(0)}&deg; /{data.main.temp_min.toFixed(0)}&deg; Ressenti {data.main.feels_like.toFixed(0)}&deg;C</div>
                   </div>
                   <div className="mx-8">
                       <div className="font-semibold">{data.weather[0].description}</div>
                       <div>{data.name}, {data.sys.country}</div>
                   </div>
               </div>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon-weather"/>
                </div>
            </div>

            {/* Future weather */}
            <div className="future-weather text-sm bg-gray-700 px-6 py-8 overflow-hidden">

                <div className="flex items-center">
                    <div className="w-1/6 text-lg text-gray-200">LUN</div>
                    <div className="w-4/6 flex items-center">
                        <div>icon</div>
                        <div className="ml-3">Cloudy with chance of showers</div>
                    </div>
                    <div className="w-1/6 text-right">
                        <div>5°C</div>
                        <div>-5°C</div>
                    </div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="w-1/6 text-lg text-gray-200">LUN</div>
                    <div className="w-4/6 flex items-center">
                        <div>icon</div>
                        <div className="ml-3">Cloudy with chance of showers</div>
                    </div>
                    <div className="w-1/6 text-right">
                        <div>5°C</div>
                        <div>-5°C</div>
                    </div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="w-1/6 text-lg text-gray-200">LUN</div>
                    <div className="w-4/6 flex items-center">
                        <div>icon</div>
                        <div className="ml-3">Cloudy with chance of showers</div>
                    </div>
                    <div className="w-1/6 text-right">
                        <div>5°C</div>
                        <div>-5°C</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Weather;