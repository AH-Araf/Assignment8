import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='border'>
                <h3><span className='question'>Question:</span> How does reactJS work?</h3>
                <b><p><span className='answer'>Answer:</span> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p></b>
            </div>
            <div className='border'>
                <h3><span className='question'>Question:</span> What is the difference between props and state?</h3>
                <b><p><span className='answer'>Answer:</span> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p></b>
            </div>
            <div className='border'>
            <h3><span className='question'>Question:</span> What is the use of useEffect in reactJS?</h3>
                <b><p><span className='answer'>Answer:</span> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p></b>
            </div>
        </div>
    );
};

export default Footer;