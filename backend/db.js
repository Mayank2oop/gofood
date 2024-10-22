const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require('dotenv').config();
const mongoURI =  process.env.dburi;
const mongoDB = async () =>{
  await mongoose.connect(mongoURI ,{useNewUrlParser: true } , async(err , result)=>{
    if(err) console.log("---" , err)
    else{
       console.log("connected")
       const fetched_data = await mongoose.connection.db.collection("food_items");
       fetched_data.find({}).toArray( async function(err ,data){
           const food_category = await mongoose.connection.db.collection("food_category")
           food_category.find({}).toArray(async function(err ,catdata){
          if(err) console.log(err);
          else {
            global.food_items =  data
            global.food_category = catdata
          }
          
        })
   
       })
  }
  })
}

module.exports = mongoDB ();
