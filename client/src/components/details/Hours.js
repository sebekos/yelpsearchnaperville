import React from 'react';
import { dayConvert, timeConvert } from '../../utils/data';

const Hours = ({ hours: { day, start, end } }) => {
    return (
        <div className='details-item'>
            <div className='left-item'>{dayConvert(day)}</div>
            <div className='right-item'>{`${timeConvert(start)} - ${timeConvert(
                end
            )}`}</div>
        </div>
    );
};

export default Hours;
