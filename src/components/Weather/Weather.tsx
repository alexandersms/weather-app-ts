import React, { FunctionComponent } from "react";

const Weather: FunctionComponent = () => {
    return (
        <div className="weather-container font-sans w-128 max-w-lg rounded-lg overflow-hidden bg-gray-800 shadow-lg mt-4">

            {/* Current weather */}
            <div className="current-weather flex items-center justify-between px-6 py-8">
               <div className="flex items-center">
                   <div>
                       <div className="text-6xl font-semibold">8°C</div>
                       <div>Feels like 2°C</div>
                   </div>
                   <div className="mx-8">
                       <div className="font-semibold">Cloudy</div>
                       <div>Paris, France</div>
                   </div>
               </div>
                <div>icon</div>
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
            </div>

        </div>
    )
}

export default Weather;