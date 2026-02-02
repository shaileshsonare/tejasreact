import React from 'react'

export default function Sqr(props) {
    let x = props.num;

  return (
<>  
<button onClick={()=>{
    alert(`Square of `+ x +` is `+ x*x )
}}>
    Get Square
</button>
{/* <h1>Square of {x} is  {x*x}</h1> */}

</>  
)
}
