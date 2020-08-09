import React, { FunctionComponent } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";

//--importation des composants SearchBar, Alert, Weather
import SearchBar from './components/Search/SearchBar';
import Alert from "./components/Alert/Alert";
import Weather from "./components/Weather/Weather";

//-- importation des actions setAlert et setError
import {setAlert} from "./actions/alertActions";
import {setError} from "./actions/weatherActions";


const App: FunctionComponent = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state:RootState) => state.weather.data);
    const loading = useSelector((state:RootState) => state.weather.loading);
    const error = useSelector((state:RootState) => state.weather.error);
    const alertMsg = useSelector((state:RootState) => state.alert.message);

  return (
    <div className="App flex justify-center pt-6">

        <div className="text-white w-128 mb-8">

            {/* Weather Component*/}
            <SearchBar title="Entrer le nom d'une ville et cliqué sur le bouton Recherche"/>

            {/* Loading || Weather Component */}
            {
                loading ? <h2 className="text-2xl">Chargement...</h2> :

                    weatherData && <Weather data={weatherData}/>
            }

            {
                alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>
            }

            {
                error && <Alert message={error} onClose={() => dispatch(setError())}/>
            }

        </div>

    </div>
  );
}

export default App;
