import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      hello

      <Login/>
    </>
  )
}

export default App
