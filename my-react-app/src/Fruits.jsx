import React from 'react'

export default function Fruits() {

    const fruits = ["Apple", "Banana" , "Chiku", "Dandru"]

    

  return (
    <div>

        <ul>
            {fruits.map((f)=>{
                return <li>{f}</li>
            })}
        </ul>
    </div>
  )
}
