import React, { useMemo, useState } from 'react'
import { useLangContext } from '../context/LangProvider'

const TestMemo = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const { lang } = useLangContext()

  // const value = () => {
  //   console.log('calculate')
  //   for (let i = 0; i < 1000000000; i++) {}
  //   return count1 + count2
  // }

  const value = useMemo(() => {
    console.log('calculate')
    for (let i = 0; i < 1000000000; i++) {}
    return count1 + count2
  }, [count1, count2])

  return (
    <div>
      {' '}
      <h1>Current lang: {lang}</h1>
      <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
      <button onClick={() => setCount3(count3 + 1)}>{count3}</button>
      <hr />
      <hr />
      <h1>{value}</h1>
    </div>
  )
}

export default TestMemo
