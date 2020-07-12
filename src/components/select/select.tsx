import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { CountryInterface } from '../../state/interfaces/country.interface';
import { StateInterface } from '../../state/interfaces/state.interface';
import vector from '../../assets/vector.png';

import './select.scss';
interface selectProps {
    setCountry(country: string): void;
    countries: CountryInterface[];
}

function Select(props: selectProps) {
    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const onOptionClicked = (country: string) => () => {
        props.setCountry(country);
        setIsOpen(false);
    };

    return (
        <div className='dropdown-container'>
            <div className='dropdown-header' onClick={toggle}>
                { country ? country[0].toUpperCase() + country.slice(1) : ''} 
                <img src={vector} alt="Logo" />
                </div>
            {isOpen && (
                <div className='dropdown-list-container'>
                    <ul className='dropdown-list'>
                        { props.countries.map((country, i) => <li key={i} onClick={onOptionClicked(country.Slug)} className='list-item'>{country.Country}</li>) }
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Select;