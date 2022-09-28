import React from 'react';
import './GymCarts.css'

const GymCarts = () => {
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


            {/* <p>Selected Items: {}</p>
            <p>Total Price: ${}</p>
            <p>Total Shipping: ${} </p>
            <p>Vat: ${}</p>
            <h4>Grand Total: ${} </h4> */}
        </div>
    );
};

export default GymCarts;