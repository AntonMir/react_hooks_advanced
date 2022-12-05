import React, { useState } from 'react'


const useStateTest = () => {
    
    // инициализируем состояние
    const [state, setState] = useState(0);

  return (
    <>
        useState:
        Count: {state}
        <button onClick={() => setState(state - 1)}>-</button> 
        <button onClick={() => setState(state + 1)}>+</button>
    </>
  );
}

export default useStateTest