import React, { useEffect, useState } from 'react';
import GymCarts from '../GymCarts/GymCarts';
import GymDetails from '../GymDetails/GymDetails';
import './Gym.css'

const Gym = () => {
    const [gym, setGym] = useState([]);
    useEffect(() => {
        fetch('gym.json')
        .then(res => res.json())
        .then( data => setGym(data))
    } , [])



    return (
        <div className='full-container'>
            <div className="Gym">
                {
                    gym.map(a => <GymDetails 
                        key={a.id}
                        a={a}
                        ></GymDetails> )
                }
            </div>

            <div className='Gym-cart'>
                <GymCarts></GymCarts>
            </div>
            
        </div>
    );
};

export default Gym;