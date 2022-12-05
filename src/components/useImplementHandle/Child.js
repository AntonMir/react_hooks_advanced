import React, { useImperativeHandle, forwardRef } from 'react'

function ChildComponent(props, ref) {
    
    useImperativeHandle(ref, () => ({
        consoleLog: (value) => {
            console.log(value)
        }
    }))

    console.log('CHILD RENDER')
    
    return <>This is a child</>
}

export default forwardRef(ChildComponent)