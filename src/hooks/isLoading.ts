import { useSelector } from "react-redux";
import { StateInterface } from "../state/interfaces/state.interface";

export function IsLoading() {
    const isLoading = useSelector((state: { covid: StateInterface }) => {
        return state.covid.isLoading;
    });

    return isLoading;
}