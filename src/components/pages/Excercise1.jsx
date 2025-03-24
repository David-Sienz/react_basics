import { useState } from 'react'
import Card from '../Card'
import List from '../List'
import Button from '../Button'

export default function Excercise1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 >Liste</h1>
      <div className="flex flex-col gap-0.5" >
        <List item={"Coffee"}></List>
        <List item={"Tea"}></List>
        <List item={"Butter"}></List>
      </div>

      <h1 className="mt-40">Button-Count: {count}</h1>
      <div className="">
        <Button  element={"Sendar"} count={count} setCount={setCount} ></Button>
      </div>

      <h1 className="mt-40">Card</h1>
      <div className="flex flex-col gap-4">
        <Card image={"/./public/John-Doe.png"} name={"John Doe"} jobtitle={"Architect & Engineer"}></Card>
      </div>
      
      
    </>
  )
}

