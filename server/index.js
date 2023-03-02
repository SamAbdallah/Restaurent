const express=require("express")
const app=express()
const mongoose= require("mongoose")
const allNames=require("./controllers/allNames")
const addItem=require("./controllers/addItem")
const cors=require('cors')
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://Sam:1234567890@cluster3.mkdrnqi.mongodb.net/test?retryWrites=true&w=majority")


app.get("/getItems",allNames);
app.post("/createItem",addItem);  



 
app.listen(3005,()=>{
    console.log("server runs perfectly")
})