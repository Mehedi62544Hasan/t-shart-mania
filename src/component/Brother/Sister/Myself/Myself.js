import React, { useContext } from 'react';
import { NumContext, RingContext } from '../../../grandma/Grandma';

const Myself = () => {
    const ring = useContext(RingContext)
    const [num, setNum] = useContext(NumContext)
    return (
        <div className='persone'>
            <h2>Mehedi Hasan</h2>
            <p>{ring}</p>
            <button onClick={() => setNum(num + 1)}>Click</button>

        </div>
    );
};

export default Myself;