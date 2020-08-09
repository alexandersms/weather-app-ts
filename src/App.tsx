import React, { FunctionComponent } from 'react';
import {useSelector} from "react-redux";
import {RootState} from "./store";

//--importation des composants Index, Weather
import SearchBar from './components/Search';
import Weather from "./components/Weather/Weather";


const App: FunctionComponent = () => {
    const weatherData = useSelector((state:RootState) => state.weather.data);
    const loading = useSelector((state:RootState) => state.weather.loading);

  return (
    <div className="App flex justify-center pt-6">

        <div className="text-white mb-8 w-128">

            {/* Weather Component*/}
            <SearchBar title="Entrer le nom d'une ville et cliqué sur le bouton Recherche"/>

            {/* Loading || Weather Component */}

            {
                loading ? <h2 className="text-2xl">Chargement...</h2> :

                    weatherData && <Weather data={weatherData}/>
            }

        </div>

    </div>
  );
}

export default App;
