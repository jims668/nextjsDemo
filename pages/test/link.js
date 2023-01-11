import Link from "next/link"
import {useState} from "react"
export default () =>{

    const [count,setCount] =useState(0);

    return (
    <div>
        <Link href="/UserInfo">
            UserInfo
        </Link>

        <h2>Link Demo </h2>
        <button onClick={()=>{setCount(count+1)}}>加{count}</button>
    </div>
)
    }