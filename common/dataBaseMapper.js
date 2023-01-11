import { dbMongo } from "./db";

const dbDriver = dbMongo;


export function getUserInfo(token,callback) {
    return dbDriver.getUserInfo(token,callback);
}



export function addUserInfo(userInfo,callback){
    return dbDriver.addUserInfo(userInfo,callback)
}