import React, { useEffect, useLayoutEffect, useState } from 'react'

const Counter = () => {

    // UseState

    const [myData, setMyData] = useState(0)

    const [alert, setAlert] = useState('Hello')

    const Increase = () => {
        setMyData(myData + 1)
    }

    const Decrease = () => {
        setMyData(myData - 1)
    }

    const Reset = () => {
        setMyData(0)
    }

    // UseEffect 

    // 1

    // useEffect(()=>{
    //   Run on  every render
    // })

    // 2
    // useEffect(()=>{
    //  Run on first render / fetch api
    // }, [])

    // 3

    // useEffect(()=>{
    //     console.log('My Data is changed');
    // },[myData])

    // UseLayoutEffect

    // useEffect(()=>{
    //     setAlert('Bye Bye  Bye ByeBye Bye')
    // })

    // useLayoutEffect(() => {
    //     setAlert('Bye Bye  Bye ByeBye Bye')
    // })

    return (
        <div>
            <h1>Counter</h1>
            <span>{myData}</span>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button>

            <p>{alert}</p>
        </div>
    )
}

export default Counter