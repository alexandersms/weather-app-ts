import React, { FunctionComponent } from 'react';
import SearchBar from './components/Search/SearchBar'
import Weather from "./components/Weather/Weather";

const App: FunctionComponent = () => {
  return (
    <div className="App flex justify-center pt-16">

        <div className="text-white mb-8">

            {/* Weather Component*/}
            <SearchBar title="Weather App"/>

            {/* Weather Component*/}
            <Weather/>

        </div>

    </div>
  );
}

export default App;
