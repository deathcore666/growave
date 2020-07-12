import { useSelector } from "react-redux";
import { StateInterface } from "../state/interfaces/state.interface";

export function IsError() {
    const isError = useSelector((state: { covid: StateInterface }) => {
        return state.covid.isError;
    });

    return isError;
}