const mongoose=require("mongoose")

const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true
    }
})

const ItemModel=mongoose.model("items",itemSchema)
module.exports=ItemModel