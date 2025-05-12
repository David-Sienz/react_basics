import React, { useState } from "react";
import Card from "../Card";
import Button from "../Button";

export default function Excercise_Router() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen bg-amber-200 p-4">
      <h1>Hallo von Excercise_Router!</h1>
      <p>Button wurde {count} Mal geklickt.</p>

      <div className="grid grid-cols-3 gap-2">
        <Card image="https://via.placeholder.com/150" name="Alice" jobtitle="Dev" />
        <Card image="https://via.placeholder.com/150" name="Bob" jobtitle="Designer" />
        <Card image="https://via.placeholder.com/150" name="Carol" jobtitle="Manager" />
      </div>

      <div className="mt-4">
        <Button element="Klick mich!" count={count} setCount={setCount} />
      </div>
    </div>
  );
}
