
const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    email:String,
    password:String

})

const UserModel=mongoose.model("user",UserSchema)


module.exports={UserModel}