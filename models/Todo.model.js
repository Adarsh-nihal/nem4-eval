const mongoose=require("mongoose")

const TodoSchema=mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    quantity:Number,
    image:String,
    userId:String

})

const TodoModel=mongoose.model("todo",TodoSchema)


module.exports={TodoModel}
