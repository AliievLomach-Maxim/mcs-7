import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counterSlise'
import { langAction } from '../../store/langSlice'

const HomePage = () => {
  const counter = useSelector((state) => state.counter.value)
  const language = useSelector((state) => state.lang.current)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment(1))
  }

  const handleDecrement = () => {
    dispatch(decrement(1))
  }

  const handleChangeLang = ({ target: { value } }) => {
    dispatch(langAction(value))
  }

  const setUa = (value) => {
    dispatch(langAction(value))
  }

  return (
    <div>
      <h1>HomePage</h1>
      <br />
      <select value={language} onChange={handleChangeLang}>
        <option value='en'>EN</option>
        <option value='ua'>UA</option>
      </select>
      <button onClick={() => setUa('ua')}>setUa</button>
      <br />
      <button onClick={handleIncrement}>+</button>
      <br />
      {counter}
      <br />
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default HomePage
