import React from 'react';

export interface topResultProps {
    cases: number;
    date: string;
}

function TopResult(props: topResultProps) {
    return (
        <>
            Top
            <div>{props.date}</div>
            <div>{props.cases}</div>
        </>
    );
}

export default TopResult;