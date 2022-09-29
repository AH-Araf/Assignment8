import React from 'react';
import Break from '../Break/Break';
import './GymCarts.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GymCarts = (props) => {
    const {gymCart} = props;
    // const {breakCart} = props;

    let totalTime = 0;
    // let gymCarts = 0;
    for(const a of gymCart){
        totalTime = totalTime + a.time;
        
    } 
    const notify = () => {
        toast('Your Activity Completed. This is React Toast')
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
                <Break></Break>  
            </div>

            <div className='exercise'>
                <p><b>Exercise Time: {totalTime} sec</b></p>
            </div>

            <div>
                <button className='btn-cart1' onClick={notify}>Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default GymCarts;