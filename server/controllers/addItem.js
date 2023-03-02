const ItemModel=require("../models/items")

const addItem=async (req, res) => {
  try{
    const item = req.body;
    const newItem = new ItemModel(item);
    await newItem.save();
  
    res.json(item);
  }
  catch(err){
    console.log(err)
  }
  }

  module.exports=addItem 