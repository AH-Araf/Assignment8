import React from 'react';
import './ShowBreak.css'

const ShowBreak = (props) => {
    const { breaks } = props.b;
    return (
        <div>
            <div>
            <button  onClick={()=>props.handleAddToBreakCart(props.b)} className='btn'>
                <p>{breaks}s</p> 
                </button>
            </div>
            
        </div>    
    );
};

export default ShowBreak;