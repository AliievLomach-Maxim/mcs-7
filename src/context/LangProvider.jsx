import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const useLangContext = () => useContext(LangContext)

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export default LangProvider
