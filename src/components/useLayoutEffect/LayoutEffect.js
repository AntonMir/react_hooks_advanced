import React, { useEffect, useLayoutEffect, useState } from 'react'


const LayoutEffect = () => {

    const [randomNumber, setRandomNumber] = useState(0);
 
    useLayoutEffect(() => {
    if (randomNumber === 0) {
        setRandomNumber(Math.random() * 1000);
    }
  }, [randomNumber]);

    return (
        <div className='App' style={{height: '1000px'}}>
            <p>{randomNumber}</p>
            <button onClick={() => setRandomNumber(0)}>
                Change value 
            </button>
        </div>
    );
}

export default LayoutEffect