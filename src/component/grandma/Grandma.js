import React, { createContext, useState } from 'react';
import './Grandma.css'
import Fother from './Father/Fother';

export const RingContext = createContext('still ring')
export const NumContext = createContext('number')

const Grandma = () => {
    const [num, setNum] = useState(1)
    return (
        <NumContext.Provider value={[num, setNum]}>
            <RingContext.Provider value='gold ring'>
                
                 <div>
            <h2 className='persone'>this is grandma</h2>
            <Fother></Fother>
        </div>
        </RingContext.Provider>
                </NumContext.Provider>
    );
};

export default Grandma;