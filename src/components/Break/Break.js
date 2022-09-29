import React, { useEffect, useState } from 'react';

import { addToDb, getStoredCart } from '../../utilities/fakedb';

import SelectbTime from '../SelectbTime/SelectbTime';
import ShowBreak from '../ShowBreak/ShowBreak';
import './Break.css'

const Break = () => {

    const [breaks, setBreak] = useState([]);
    useEffect(() => {
        fetch('break.json')
        .then(res => res.json())
        .then( data => {
            setBreak(data)
        })
    } , [])
    
    useEffect(() =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const _id in storedCart){
            const addedProduct = breaks.find(breaking => breaking._id === _id);
            if(addedProduct){
                
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [breaks])

    const [breakCart, setCart] = useState([]);
    const handleAddToBreakCart = (b) =>{ 
        const newBreakCart = [...breakCart, b];
        setCart(newBreakCart);
        addToDb(b._id)
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