import React, { useContext } from 'react';
import { NumContext } from '../../grandma/Grandma';
import Myself from './Myself/Myself';

const Sister = () => {
    const [num, setNum] = useContext(NumContext)
    return (
        <div>
            <div className='persone'>
            <h2>Sister</h2>
            <p>{num}</p>
            </div>
            <Myself></Myself>
        </div>
    );
};

export default Sister;