import { Role } from './Role';
export interface User{
    id:number,
    firstName:String,
    lastName:String,
    phoneNumber:String,
    email:String,
    passwordHash:String,
    roles:Role[]
}
