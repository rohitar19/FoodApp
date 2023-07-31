 const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://rohitar19:ranjitrohit456@cluster0.zoxvhro.mongodb.net/FoodApp?retryWrites=true&w=majority'

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("food_item");
    let data=await fetched_data.find({}).toArray() 
    // console.log(data);

    let fetched_data2 = mongoose.connection.db.collection("foodCatogories");
    let data2=await fetched_data2.find({}).toArray() 
   
    global.food_item =data;
    global.foodCategory =data2;
    // console.log(data2) 

      

  } catch (error) {
    console.log('err: ', error);
  }
};

module.exports = mongoDB;
