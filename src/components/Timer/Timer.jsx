import React, { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    return () => {
      console.log('first')
    }
  })

  return <div>Timer</div>
}

export default Timer
