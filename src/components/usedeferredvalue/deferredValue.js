import React, { Suspense, useCallback, useDeferredValue, useEffect, useId, useLayoutEffect, useState } from 'react'


const DeferredValue = () => {

    const [todos, setTodos] = useState(null)
    const [trigger, setTrigger] = useState(0)

    const getData = useCallback(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) =>  response.json())
        .then(todo => setTodos(todo))
    }, [])

    const triggering = () => {
        setTrigger(trigger + 1)
    }

    const clearData = useCallback(() => {
        setTodos(null)
    }, [])

    const id = useId()
    console.log('id', id)

    

    // useLayoutEffect(()=> {
    //     // срабатывает до отрисовки
    //     getData()
    //     console.log('useLayoutEffect')
    // }, [trigger])

    useEffect(()=> {
        // срабатывает после отрисовки
        getData()
        console.log('useEffect')
    }, [trigger])

    // console.log('todos', todos)

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

export default DeferredValue