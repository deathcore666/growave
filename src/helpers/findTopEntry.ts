import { ResultInterface } from "../state/interfaces/result.interface";
import { topResultProps } from "../components/top-result/topResult";

export const findTopRecoveredCasesEntry = (resultsList: ResultInterface[]): topResultProps => {
    let cases: number = 0;
    let resultingEntry: ResultInterface = resultsList[0];
    resultsList.forEach((entry: ResultInterface, index: number, array: ResultInterface[]) => {
        if (index === 0) {
            return;
        }
        const currentCases = entry.Recovered - array[index -1].Recovered
        if (currentCases > cases) {
            cases = currentCases;
            resultingEntry = entry;
        }
    });

    return { cases, date: resultingEntry.Date };
};