import { useState } from 'react'
import './styles/global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className='fon'>Ola, mundo!</h1>
  )
}

