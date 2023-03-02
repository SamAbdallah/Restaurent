const ItemModel=require("../models/items")

const allNames=(req, res) => {
    ItemModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  };

  module.exports=allNames