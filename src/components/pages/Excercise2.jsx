import { useState } from 'react'
import User from "../User";
export default function Excercise2() {
    const [count, setCount] = useState(0);

  return (
    <>
      <User name="Dragan" description="Schueler"></User>
      <User name="Damien" description="Schueler"></User>
      <User name="Simon" description="Schueler"></User>
    </>
  )
}

