import React from 'react';
import './GymCarts.css'

const GymCarts = (props) => {
    const {gymCart} = props;

    let totalTime = 0;
    for(const a of gymCart){
        totalTime = totalTime + a.time;
    }


    return (
        <div className='gym-cart'>
            <div className='details'>
                <img src="images/araf.png" alt="" />
                <h4 className='name'>Md. Arafat Hossain</h4>
            </div>

            <div className='align'>
                <div className='box'>
                    <h3>75</h3>
                    <p>Weight</p>
                </div>
                <div className='box'>
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div className='box'>
                    <h3>25</h3>
                    <p>Age</p>
                </div>
            </div>

            <div>
                <h4>Add a Break</h4>
            </div>

            <div className='exercise'>
                <p><b>Break Time: {0}</b></p>
                <p><b>Exercise Time: {totalTime}</b></p>
            </div>

        </div>
    );
};

export default GymCarts;