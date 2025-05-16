import React from 'react'
 
export default function Button({name, onClick}) {
    return (
        <button onClick={onClick} className='bg-emerald-400 w-40 h-20 my-10'>
          <p>{name}</p>
        </button>
      );
    }