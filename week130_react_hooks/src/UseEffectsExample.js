import React, {useEffect, useState, useMemo, useCallback} from 'react'
import UseCallBackExample from './UseCallBackExample'

export default function UseEffectExample() {
  
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)

    console.log('*** Render() called ***')
    
    const callUseEffect = () => {
        console.log('1 - useEffect() called every time render() is called')
    }

    useEffect(callUseEffect)

    useEffect(() => {
        console.log('2 - useEffect() called only once')
    }, [])

    useEffect(() => {
        console.log('3 - useEffect() called when A changes')
    }, [a])

    useEffect(() => {
        console.log('4 - useEffect() called when B changes')
    }, [b])

    useEffect(() => {
        console.log('5 - useEffect() called when A or B changes')
    }, [a, b])

    useEffect(() => {
        console.log('6 - useEffect() called when component is mounted')
      return () => {
        console.log('7 - useEffect() called when component is unmounted')
      }
    }, [a])
    
    const complexLogicFunction = () => {
        console.log('Complex logic function called')
    }

    useMemo(complexLogicFunction, [a,c])

    const myCallbackFunction = () => {
        console.log('Callback function called')
    }

    const myCallbackFunctionHandler = useCallback(myCallbackFunction, [a])

    return (
    <div>
        <h2>useEffect() Example</h2>
        <button onClick={() => setA(a + 1)}>Update A</button>
        <button onClick={() => setB(b + 1)}>Update B</button>
        <button onClick={() => setC(c + 0)}>Update C</button>
        <UseCallBackExample handler={myCallbackFunctionHandler} />
    </div>
  )
}
