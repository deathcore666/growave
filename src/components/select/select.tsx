import React from 'react';
import { useSelector } from 'react-redux';

import { CountryInterface } from '../../state/interfaces/country.interface';
import { StateInterface } from '../../state/interfaces/state.interface';

interface selectProps {
    setCountry(country: string): void;
    countries: CountryInterface[];
}

function Select(props: selectProps) {
    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });

    const setCountry = (event: any) => {
        props.setCountry(event.target.value);
    }

    return (
        <select onChange={ setCountry } value={ country }> 
            { props.countries.map((country, i) => <option key={i} value={country.Slug}>{country.Country}</option>) }
        </select>
    );
}

export default Select;