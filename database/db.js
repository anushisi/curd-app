import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async(username,password)=>{

  const URL = `mongodb://${username}:${password}@ac-c1trfzb-shard-00- 00.dwmyfln.mongodb.net:27017,ac-c1trfzb-shard-00-01.dwmyfln.mongodb.net:27017,ac-c1trfzb-shard-00-02.dwmyfln.mongodb.net:27017/?ssl=true&replicaSet=atlas-j8tqtt-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL,{ useNewUrlParser: true });
    console.log("Database connnected successfully");
  } catch (error) {
    console.log('Error while connecting to the database ', error);
  }
}
export default Connection;