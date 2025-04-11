import React, { useState } from "react";
  
export default function User ({ name, description }) {
    const [amountOfClick, setAmountOfClick] = useState(0);
    let hello = "Hello " + name + "!";
    let style = amountOfClick > 5 ? "bg-green-400" : "";
 
    return (
        <div className="border p-4 hover:cursor-point"
                onClick={() => {
            setAmountOfClick(amountOfClick + 1)
                }}> 
        <h1 className="font-extrabold text-2xl">{hello}</h1>
        
                <p>{description}</p>
        <div>Amount of clicks: {amountOfClick}</div>
        </div>
    );
}