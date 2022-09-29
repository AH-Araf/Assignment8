import React from 'react';
import './GymDetails.css';

const GymDetails = (props) => {
    const {name, time, img} = props.a;
    
    return (
        <div className='gym'>  
            <img src={img} alt="" />
            <div className='gym-info'>
                <h3>{name} </h3>
                <p>Time: {time}s</p> 
            </div>

            <button onClick={()=>props.handleAddToGymCart(props.a)} className='btn-cart'>
                <p><b> Add to List</b></p>
            </button>
        </div>
    );
};

export default GymDetails;