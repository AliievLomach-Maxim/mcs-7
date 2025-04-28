import { useState } from 'react'
import TestForm from './components/TestForm/TestForm'
import ControlForm from './components/ControlForm/ControlForm'

const App = () => {
  const handleSave = (data) => {
    const newData = { ...data, userRole: 'user' }
    console.log('newData', newData)
  }
  const [lang, setLang] = useState('ua')

  const [inputValue, setInputValue] = useState('')
  const handleChange = ({ target: { value } }) => {
    if (value.includes('@')) return
    setInputValue(value)
  }

  const handleChangeLang = ({ target: { value } }) => {
    setLang(value)
  }

  return (
    <div>
      <h1>Current lang: {lang}</h1>
      <input type='text' value={inputValue} onChange={handleChange} />
      <select value={lang} onChange={handleChangeLang}>
        <option value='en'>EN</option>
        <option value='ua'>UA</option>
      </select>
      <hr />
      <ControlForm save={handleSave} />
    </div>
  )
}

export default App
