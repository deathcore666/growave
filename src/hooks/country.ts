import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { StateInterface } from "../state/interfaces/state.interface";
import { ActionsCreators } from "../state/actions";

export function Country() {
    const dispatch = useDispatch();
    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });
    const setCountry = (country: string) => dispatch(ActionsCreators.setCountry(country));
    
    useEffect(() => {
        if(!country) {
            dispatch(ActionsCreators.setCountry('kyrgyzstan'));
        }
    }, [country, dispatch]);

    return { country, setCountry };
}