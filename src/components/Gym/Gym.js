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
    
    const handleAddToCart = (a) =>{ 
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
                        handleAddToCart = {handleAddToCart}
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