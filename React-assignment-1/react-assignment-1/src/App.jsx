import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Person from './Components/Person'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
      <Header title={PW-SKills}/>
      <Person name={"Anshul"} age={21}/>
      
    </>
  )
}

export default App
