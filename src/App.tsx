import React, { FunctionComponent } from 'react';
import {useSelector} from "react-redux";
import {RootState} from "./store";

//--importation des composants SearchBar, Weather
import SearchBar from './components/Search';
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";


const App: FunctionComponent = () => {
    const weatherData = useSelector((state:RootState) => state.weather.data);
    const loading = useSelector((state:RootState) => state.weather.loading);
    const forecastData = useSelector((state:RootState) => state.forecast.data);
    const loadForecast = useSelector((state:RootState) => state.forecast.loading);

  return (
    <div className="App flex justify-center pt-6">

        <div className="text-white mb-8 w-128">

            <h1 className="text-4xl text-blue-400 text-center font-semibold mb-2">Weather App ❄️</h1>
            {/* Search Component*/}
            <SearchBar title="Entrer le nom d'une ville et cliqué sur le bouton Recherche"/>

            {/* Loading || Weather Component */}

            {
                loading ? <h2 className="text-3xl">Chargement...</h2> :

                    weatherData && <Weather data={weatherData}/>
            }

            {
                loadForecast ? <h4 className="text-2xl">Chargement...</h4> :
                   forecastData && <Forecast data={forecastData}/>
            }

        </div>

    </div>
  );
}

export default App;
