import React from 'react';
import { ResultInterface } from '../../state/interfaces/result.interface';

import './entry.scss';
import { active, confirmed, deaths, recovered } from '../../constants/textValues';
import { dateFormat } from '../../helpers/dateFormat';

interface entryProps {
    result: ResultInterface;
}

function Entry(props: entryProps) {
    return (
        <div className='entry'>
            <div className='date'>
                {dateFormat.format(new Date(props.result.Date))}
            </div>
            <div className='data-block'>
                <div className='data-row'>
                    <div className='data-entry'>
                        <div className='data-label'>{active}</div> 
                        <div className='data'>{props.result.Active}</div>
                    </div>
                    <div className='data-entry'>
                        <div className='data-label'>{confirmed}</div> 
                        <div className='data'>{props.result.Confirmed}</div>
                    </div>
                </div>
                <div className='data-row'>
                    <div className='data-entry'>
                        <div className='data-label'>{deaths}</div> 
                        <div className='data'>{props.result.Deaths}</div>
                    </div>
                    <div className='data-entry'>
                        <div className='data-label'>{recovered}</div> 
                        <div className='data'>{props.result.Recovered}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;