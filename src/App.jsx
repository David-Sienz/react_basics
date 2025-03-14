import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 >Liste</h1>
      <div >
        <List item={"Coffee"}></List>
        <List item={"Tea"}></List>
        <List item={"Butter"}></List>
      </div>
    </>
  )
}

export default App
