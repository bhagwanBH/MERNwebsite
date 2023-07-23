const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const mongoURI =`mongodb+srv://${process.env.mongo_USERNAME}:${process.env.mongo_PASSWORD}@cluster0.7rweus0.mongodb.net/gofoodmern?retryWrites=true&w=majority`
const mongoDB = async()=>{
    

   await mongoose.connect(mongoURI,{ useNewUrlParser: true },async(err,result)=>{
    if(err) console.log("---" ,err)
    else{
        console.log("connected");
        const fatched_data = await mongoose.connection.db.collection("food_items");
        fatched_data.find({}).toArray(async function( err, data){
const foodcategory =  await mongoose.connection.db.collection("foodcategory");
foodcategory.find({}).toArray(function(err,catData){
    if(err) console.log(err);
    else {
            global.food_items = data;
            global.foodcategory = catData;}
})

            // if(err) console.log(err);
            // else {
            //     global.food_items = data;
               
            // }
        })
    }

 
});

}
module.exports = mongoDB();