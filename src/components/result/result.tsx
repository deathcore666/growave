import React from 'react';

import Entry from '../entry';
import { ResultInterface } from '../../state/interfaces/result.interface';

interface resultProps {
    results: ResultInterface[];
}

function Result(props: resultProps) {
    return (
        <>
            {props.results
                .slice(Math.max(props.results.length - 5, 0))
                .map((result: ResultInterface, i: number) => (<Entry key={i} result={result}/>))
            }
        </>
    );
}

export default Result;