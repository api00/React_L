import React,{useState} from 'react'

export default function HOOK() {
    const [count,setCount] = useState(0)
    const ClickHna = () =>{
        setCount(count + 1);
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={ClickHna}>increament</button>
    </div>
  )
}
