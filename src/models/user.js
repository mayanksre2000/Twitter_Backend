import mongoose from "mongoose";
// const {Schema} = mongoose;
// import {ObjectId} from 'bson';

const userSchema = new mongoose.Schema({
    email:{
       type : String,
       required : true,
       unique : true
    },
    password:{
        type : String
     },
     bio : {
        type : String
     },
     comment:{
        type : String
     },
     tweets:[        // its an array as I can have many tweets for paticular hashtag
        {     
        type : mongoose.Schema.Types.ObjectId
     }
    ],
    name:{        
      type: String
  
  }

});

const  User = mongoose.model('User',userSchema) // it creates model out of schema and remember to start your model name with Captital letter

export default User;

