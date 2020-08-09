import React, {FormEvent, FunctionComponent, useState} from "react";
import {useDispatch} from "react-redux";

//--Set Alert action
import {setAlert} from "../../actions/alertActions";
//-- getWeather et setLoading
import {getWeather, setLoading} from "../../actions/weatherActions";


interface SearchProps {
    title: string
}

const SearchBar: FunctionComponent<SearchProps> = ({ title }) => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('');

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            return dispatch(setAlert('La ville est obligatoire!!'))
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
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
        </div>
    )
}

export default SearchBar