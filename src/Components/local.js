import React from 'react'
import { useRef } from 'react'

function Local() {
    const data = useRef();
    const handelLocal = ()=>{
        console.log(data.current.value ,"name value");
        localStorage.setItem("inputvalue" , data.current.value )
    }
    const x = localStorage.getItem("inputvalue");
  return (
    <div>
         <input ref={data}/>
         <button type="text" onClick={handelLocal}>Add</button>
         <br/>
         <br/>
         
    </div>
  )
}

export default Local
