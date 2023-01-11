import {getUserInfo} from "../../common/dataBaseMapper"

export default function handler(req, res) {
    console.log('getUserInfo.')

    const name = req.body.name;
    getUserInfo(name,a=>{
       const err = (a == null)
       if (err) {
           res.status(200).json({ error: err })
       } else {
           res.status(200).json({"data":a});
       }
   })



}

