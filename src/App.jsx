import { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer'
import Counter from './components/Counter/Counter'

// App mount >> App unmount >> App mount

const App = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [isShowTimer, setIsShowTimer] = useState(false)

  // Mount
  useEffect(() => {
    console.log('Mount')
  }, [])

  // Mount & update counter
  useEffect(() => {
    console.log('counter', counter)
  }, [counter])

  // update counter
  useEffect(() => {
    if (counter2 === 0) {
      return
    }
    console.log('counter2', counter2)
  }, [counter2])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
      <button onClick={() => setIsShowTimer(!isShowTimer)}>{isShowTimer ? 'Hide' : 'Show'}</button>
      {isShowTimer && <Timer />}
      <hr />
      <hr />
      <hr />
      <Counter />
    </div>
  )
}

export default App
