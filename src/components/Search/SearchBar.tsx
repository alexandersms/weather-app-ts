import React, { FunctionComponent } from "react";

interface SearchProps {
    title: string
}

const SearchBar: FunctionComponent<SearchProps> = ({ title }) => {
    return (
        <div className="places-input text-gray-800">
            <input type="text" className="w-full"/>
        </div>
    )
}

export default SearchBar