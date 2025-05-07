import { useEffect, useRef, useState } from 'react'

const TestRefTimer = () => {
  const [counter, setCounter] = useState(0)
  const idRef = useRef()

  useEffect(() => {
    idRef.current = setInterval(() => {
      console.log(Date.now())
    }, 1000)

    return () => {
      clearInterval(idRef.current)
    }
  }, [])

  const handleClick = () => {
    console.log('idRef.current', idRef.current)
    clearInterval(idRef.current)
  }

  return (
    <div>
      <h1>Timer</h1>
      <button onClick={handleClick}>Stop</button>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}

export default TestRefTimer
