import {addUserInfo} from "../../common/dataBaseMapper"

export default function handler(req, res) {
    console.log('addUserInfo.')

    console.log("name:",req.query.name);
    console.log("age:",req.query.age)
    console.log("sex:",req.query.sex)

    const userInfo ={name:req.query.name,age:req.query.age,sex:req.query.sex}
    addUserInfo(userInfo,a=>{
       const err = (a == null)
       if (err) {
           res.status(200).json({ error: err })
       } else {
           res.status(200).json({"data":a});
       }
   })


}

