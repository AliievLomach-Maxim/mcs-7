import TestForm from './components/TestForm/TestForm'
import ControlForm from './components/ControlForm/ControlForm'
import FormikForm from './components/FormikForm/FormikForm'

const App = () => {
  const handleSave = (data) => {
    const newData = { ...data, userRole: 'user' }
    console.log('newData', newData)
  }
  // const [lang, setLang] = useState('ua')

  // const [inputValue, setInputValue] = useState('')
  // const handleChange = ({ target: { value } }) => {
  //   if (value.includes('@')) return
  //   setInputValue(value)
  // }

  // const handleChangeLang = ({ target: { value } }) => {
  //   setLang(value)
  // }

  return (
    <div>
      {/* <ControlForm save={handleSave} /> */}
      <FormikForm save={handleSave} />
    </div>
  )
}

export default App
