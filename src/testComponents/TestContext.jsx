import { useLangContext } from '../context/LangProvider'

const TestContext = () => {
  const { lang, setLang } = useLangContext()

  return (
    <div>
      <select value={lang} onChange={({ target: { value } }) => setLang(value)}>
        <option value='en'>En</option>
        <option value='ua'>Ua</option>
      </select>
    </div>
  )
}

export default TestContext
