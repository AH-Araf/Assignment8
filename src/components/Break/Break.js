import React, { useEffect, useState } from 'react';
import SelectbTime from '../SelectbTime/SelectbTime';
import ShowBreak from '../ShowBreak/ShowBreak';
import './Break.css'

const Break = () => {

    const [breaks, setBreak] = useState([]);
    useEffect(() => {
        fetch('break.json')
        .then(res => res.json())
        .then( data => setBreak(data))
    } , [])

    const [breakCart, setCart] = useState([]);
    
    const handleAddToBreakCart = (b) =>{ 
        const newBreakCart = [...breakCart, b];
        setCart(newBreakCart);
    }

    return (
        <div className='bg-color'>
            <h4>Add a Break</h4>
            <div className="breaking">
                {
                    
                    breaks.map(b => <ShowBreak
                        key={b._id}
                        b={b}
                        handleAddToBreakCart = {handleAddToBreakCart}
                    ></ShowBreak>                      
                    )
                }
                </div>
                <div>
                    <SelectbTime breakCart={breakCart}></SelectbTime>
                </div>
            </div>
    );
};

export default Break;