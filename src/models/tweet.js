import mongoose from "mongoose";
const {Schema} = mongoose;
import {ObjectId} from 'bson';

const tweetSchema = new mongoose.Schema({
    content:{
       type : String,
       required:true
    },
    likes:[
      {  
      type : mongoose.Schema.Types.ObjectId,
      ref:'like'
     }
         ],
     noOfRetweets : {
        type : Number
     },
     comment:[
      {  
      type : mongoose.Schema.Types.ObjectId,
      ref:'comment'
     }
         ]
});

const Tweet = mongoose.model('Tweet',tweetSchema) // it creates model out of schema and remember to start your model name with Captital letter

export default Tweet;

