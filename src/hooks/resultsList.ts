import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../state/interfaces/state.interface";
import { useEffect } from "react";
import { ActionsCreators } from "../state/actions";

export function ResutsList() {
    const dispatch = useDispatch();
    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });
    const resultsList = useSelector((state: { covid: StateInterface }) => {
        return state.covid.results;
    });
    useEffect(() => {
        if (country) {
            dispatch(ActionsCreators.fetchResults(country));
        }
    }, [country, dispatch]);

    return resultsList;
}