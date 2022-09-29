import React from 'react';

const SelectbTime = (props) => {
    const {breakCart} = props;
    let totalBreakTime = 0;
    for(const b of breakCart){
        totalBreakTime = b.breaks; 
    }
    return (
        <div>
            <p><b>Break Time: {totalBreakTime} sec</b></p>
        </div>
    );
};

export default SelectbTime;