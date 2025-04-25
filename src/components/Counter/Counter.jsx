import { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    const localCounter = localStorage.getItem('counter')
    if (localCounter !== null) return JSON.parse(localCounter)
    return 0
  })

  useEffect(() => {
    if (counter === 0) return
    localStorage.setItem('counter', counter)
    // setCounter(counter + 1)
    // console.log('first')
  }, [counter])

  //   useEffect(() => {
  //     const localCounter = localStorage.getItem('counter')
  //     if (localCounter !== null) setCounter(JSON.parse(localCounter))
  //   }, [])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}

export default Counter
