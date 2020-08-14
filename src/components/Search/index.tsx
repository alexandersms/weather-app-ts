import React, {FormEvent, FunctionComponent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";

//--SetAlert, setError  action
import {setAlert} from "../../actions/alertActions";

//-- getWeather et setLoading
import {getWeather, setLoading, setError} from "../../actions/weatherActions";
import {getForecast} from "../../actions/forecastActions"

//--importation du composant Alert
import Alert from "../../components/Alert/Alert";


interface SearchProps {
    title: string
}

const SearchBar: FunctionComponent<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();

    const error = useSelector((state:RootState) => state.weather.error);
    const alertMsg = useSelector((state:RootState) => state.alert.message);

    const [city, setCity] = useState('');

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            return dispatch(setAlert('La ville est obligatoire!!'))
        } else {
            dispatch(setLoading());
            dispatch(getWeather(city));
            dispatch(getForecast(city));
            setCity('');
        }

    }

    return (
        <div className="places-input text-sm text-gray-800">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full rounded-lg p-2"
                    placeholder={ title }
                    value={city}
                    onChange={handleChange}
                />
                <button className="w-full bg-gray-700 mt-2 text-white rounded-lg p-2">Rechercher</button>
            </form>

            {
                alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>
            }

            {
                error && <Alert message={error} onClose={() => dispatch(setError())}/>
            }


        </div>
    )
}

export default SearchBar