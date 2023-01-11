export default () =>{


    return (
    <div>
        <h2>inser User Demo </h2>
        <form  name="myform" id="myform" method="get" action="/api/addUserInfo">

        userName:<input type="text" name="name" id="name" />
        <br/>
        age:<input type="text" name="age" id="age" />
        <br/>
        sex:<input type="text" name="sex" id="sex" />
        <br/>
        <input type="submit" value="Save User" />

        </form>
    </div>
)
    }