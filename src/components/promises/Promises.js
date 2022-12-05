import { getSuggestedQuery } from '@testing-library/react'
import React, { Suspense, useState } from 'react'


const Promises = () => {

    const [todos, setTodos] = useState(null)
    const [trigger, setTrigger] = useState(0)

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) =>  response.json())
        .then(todo => setTodos(todo))
    }

    const triggering = () => {
        setTrigger(trigger + 1)
    }

    const clearData = () => {
        setTodos(null)
    }

    console.log('rerender')


    return (
        <div>
            <Suspense fallback={'ПЛЭЙСХОЛДЕР'}>
                <button onClick={() => getData()}>GET</button>
                <button onClick={() => clearData()}>CLEAR</button>
                <button onClick={() => triggering()}>TRIGGER {trigger}</button>
                {todos && todos.map(todo => {
                    return (
                        <div key={todo.id} style={{display: 'flex'}}>
                            <p>{todo.id}---</p>
                            <p>{todo.title}</p>
                        </div>
                    )
                })}
            </Suspense>
        </div>
    );
}

export default Promises