import React from 'react';

import { dateFormat } from '../../helpers/dateFormat';
import { topLabel } from '../../constants/textValues';

import './topResult.scss';
export interface topResultProps {
    cases: number;
    date: string;
}

function TopResult(props: topResultProps) {
    return (
        <div className='top-container'>
            <div className='top-label'>{topLabel}</div>
            <div className='top-cases'>{props.cases}</div>
            <div className='top-date'>{dateFormat.format(new Date(props.date))}</div>
        </div>
    );
}

export default TopResult;