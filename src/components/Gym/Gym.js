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


    const [gymCart, setCart] = useState([]);
    
    const handleAddToGymCart = (a) =>{ 
        const newCart = [...gymCart, a];
        setCart(newCart);
    }

    return (
        <div className='full-container'>
            <div className="Gym">
                {
                    gym.map(a => <GymDetails 
                        key={a.id}
                        a={a}
                        handleAddToGymCart = {handleAddToGymCart}
                        ></GymDetails> )
                }
            </div>

            <div className='Gym-cart'>
                <GymCarts gymCart={gymCart}></GymCarts>
            </div>
            
        </div>
    );
};

export default Gym;