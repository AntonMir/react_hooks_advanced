import { useRef } from 'react'
// components
import Child  from './Child'




function Perent() {

    const childRef = useRef(null)

    const handleUseChildMethod = (value) => {
        childRef.current.consoleLog(value)
    }

    console.log('PERENT RENDER')

    return (
        <div>
            ParentComponent
            <Child ref={childRef} />
            <button onClick={() => handleUseChildMethod('consoleLog')}>click</button>
        </div>
    )
}

export default Perent;
