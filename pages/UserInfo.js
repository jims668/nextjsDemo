import React,{Component} from "react";
import axios from 'axios';
export default class test extends Component{
    static async getInitialProps(){
        const res = await axios.get('http://localhost:3000/api/queryUser');
        console.log("data structure：",res.data)
        return {users:res.data.data}
        // return {users:[{"_id":"1","name":"1111"}]}
    }
    //   getServerSideProps() {
    //     // Fetch data from external API
    //     const res = await fetch('http://localhost:3000/api/queryUser')
    //     const users = await res.json()
    //
    //     console.log("@@@@@@@@"+users.data.data)
    //     // Pass data to the page via props
    //     return { props: { users.data.data } }
    // }

    render(){
        return (
            <table>
                <tbody>
                {
                    this.props.users.map(item =>{
                        return <tr key={item._id}>{item.name}

                        </tr>
                    })
                }

                </tbody>

            </table>


            // <div>
            //     <h2>userInfo</h2>
            // <ul>
            //     {
            //         this.props.users.map(item =>{
            //             return <li key={item._id}>{item.name}</li>
            //         })
            //     }
            // </ul>
            // </div>
        )
    }
}
