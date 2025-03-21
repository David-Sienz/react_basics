import React from "react";

export default function List({item}) {
    return <div className="bg-teal-600 text-white w-50 h-20 flex pl-4 items-center hover:bg-teal-500">
      <p>{item}</p>
    </div>;
  }