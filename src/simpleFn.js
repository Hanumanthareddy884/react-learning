import React, {useState} from "react"

const SimpleFnCmp = (prp)=>{
    const [user,setUser] = useState("Raj");

    setTimeout(()=>{
        setUser(prp.name)
    },5000)

    return <h1>Hello how are you {user}</h1>
}

export default SimpleFnCmp;