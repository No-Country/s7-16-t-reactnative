import {prop,Ref,getModelForClass} from "@typegoose/typegoose"

class User {
@prop({ lowercase:true,required:true })
public email!:string

@prop({ required:true })
public firstName!:string

@prop({ required:true })
public lastName!:string

@prop({ required:true })
public password!:string

@prop({ required:true })
public dni!:number

@prop()//{ ref:()=>Cart }
public cart:any//Ref<Cart>[]  //User 

}

const UserModel= getModelForClass(User)