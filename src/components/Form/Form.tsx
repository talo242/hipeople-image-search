import React from 'react';
import { Dispatch } from 'redux';

interface InputProps {
    searchImage: any;
    setQuery: (payload: any) => void;
    query: string;
}

const Input: React.FC<InputProps> = (props) => {
    const { setQuery, query, searchImage } = props;

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => (
        setQuery(e.target.value)
    );

    const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(query);
        searchImage(query)
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input onChange={handleChangeInput} value={query} />
            <button type="submit">Search</button>
        </form>
    )
};

export default Input;
