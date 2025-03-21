import React from "react";

export default function Button({element, count, setCount}) {
    return <div onClick={() => {setCount(count+1)}} className="bg-green-500 w-50 h-20 button hover:bg-green-700 text-white font-bold items-center justify-center">
      <p>{element}</p>
    </div>;
  }