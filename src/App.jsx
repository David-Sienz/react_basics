import { useState } from 'react'
import Excercise1 from './components/pages/Excercise1'
import Excercise2 from './components/pages/Excercise2'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Excercise2></Excercise2>
    </>
  )
}

export default App
