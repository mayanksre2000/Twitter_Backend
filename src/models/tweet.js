import mongoose from "mongoose";
// const {Schema} = mongoose;
// import {ObjectId} from 'bson';

const tweetSchema = new mongoose.Schema({
    content:{
       type : String,
       required:true
    },
    likes:{
        type : Number
     },
     noOfRetweets : {
        type : Number
     },
     comment:{
        type : String
     }
});

const Tweet = mongoose.model('Tweet',tweetSchema) // it creates model out of schema and remember to start your model name with Captital letter

export default Tweet;

