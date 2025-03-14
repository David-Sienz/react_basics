import React from "react";

export default function List({item}) {
    return <div className="bg-teal-500 border border-white-100 w-50 h-20">
      <p>{item}</p>
    </div>;
  }