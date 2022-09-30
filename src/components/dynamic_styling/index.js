import React,{useState,useEffect} from 'react'

export default function () {

    const [name, setName] = useState("")
    const [error ,setError] = useState(false) 

    const chnageEvent=(e)=>{
        setName(e.target.value);
        
    }

    useEffect(() => {
        if(name.length < 2 ){
            setError(false)
        }
        else {
            setError(true)    
        }
    })

   

  return (
    <div>
      <input type="text" onChange={chnageEvent} value={name} style={ {backgroundColor : error ? "green" : "red" }} />
      <h1 >{name}</h1>
    </div>
  )
}
