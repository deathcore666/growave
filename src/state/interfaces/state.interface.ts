import { CountryInterface } from "./country.interface";
import { ResultInterface } from "./result.interface";

export interface StateInterface {
    results: ResultInterface[],
    country: string,
    isLoading: boolean,
    isEmpty: boolean,
    countries: CountryInterface[]
}