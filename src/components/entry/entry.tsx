import React from 'react';
import { ResultInterface } from '../../state/interfaces/result.interface';

interface entryProps {
    result: ResultInterface;
}

function Entry(props: entryProps) {
    return (
        <>
            <div>{props.result.Date}</div>
            <div>{props.result.Active}</div>
            <div>{props.result.Confirmed}</div>
            <div>{props.result.Deaths}</div>
            <div>{props.result.Recovered}</div>
        </>
    );
}

export default Entry;