import Link from "next/link"
import { useRouter } from "next/router";
import Router from "next/router";


export default () =>{

    const router = useRouter();
    console.log(router)

    return (
    <div>
        <Link href="/UserInfo">
            UserInfo
        </Link>

        <h2>Link Demo </h2>
        <button onClick={()=>{router.push({pathname:"/test/about",query:{abc:123}})}}>useRouter</button>
        <button onClick={()=>{Router.push("/test/about")}}>Router</button>
    </div>
)
    }