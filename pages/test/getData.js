import React from "react";
import fetch from "node-fetch"

export default (props)=>{
    console.log(props.data)
    let data = props.data;
    console.log(data)
    return (
        <ul>
        {data.map((item)=>{
            return (
                <li key={item._id}>{item.name}  {item.age}</li>
            )
        })}
        </ul>  
    )
}

// 获取数据
export const getServerSideProps = async ()=>{
    let res = await fetch('http://localhost:3000/api/queryUser');
    let data = await res.json();
    console.log(data);
    return {
        props:data
    }
}