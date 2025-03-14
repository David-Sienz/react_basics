import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 p-4 text-center">Hello</h1>
      <div className="flex">
        <Card name={"Lenz"} jobtitle={"AV"} description={"tseawass"}/>
        <Card name={"Riedmann"} jobtitle={"SP"} description={"heile"}/>
      </div>
      test
    </>
  )
}

export default App
