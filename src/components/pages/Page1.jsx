import React from "react";
import Card from "../Card";
import Button from "../Button";
import { Link } from "react-router-dom";
 
export default function Page1() {
  return (
    <div className="w-screen bg-amber-200 min-h-screen p-4">
      <div className="grid grid-cols-3 gap-4">
        <Card name="Max" jobtitle="Entwickler" />
        <Card name="Anna" jobtitle="Designer"/>
        <Card name="Lisa" jobtitle="Managerin"/>
        <Card name="John" jobtitle="Tester"/>
        <Card name="Mia" jobtitle="Marketing"/>
        <Card name="Tom" jobtitle="Support"/>
      </div>
 
      <Button name="Klick mich" onClick={() => alert("Button geklickt!")} />
 
      <Link
        to="/p2"
        className="bg-green-400 rounded-2xl px-4 py-2 inline-block text-white hover:bg-green-600"
      >
        Zu Seite 2
      </Link>
    </div>
  );
}
 
 