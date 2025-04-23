import { useState } from 'react'

const Counter = ({ value, handleClick }) => {
  return <button onClick={handleClick}>{value}</button>
}

const App = () => {
  const [counterState, setCounterState] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  })

  const handleClickCounter = (key) => {
    setCounterState({
      ...counterState,
      [key]: counterState[key] + 1,
    })
  }

  const sum = counterState.counter1 + counterState.counter2

  return (
    <div>
      <Counter value={counterState.counter1} handleClick={() => handleClickCounter('counter1')} />
      <h1>{sum}</h1>
      <Counter value={counterState.counter2} handleClick={() => handleClickCounter('counter2')} />
      <Counter value={counterState.counter3} handleClick={() => handleClickCounter('counter3')} />
    </div>
  )
}

export default App
