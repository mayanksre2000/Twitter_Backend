import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

    content:{
        type : String,
        required : true
     },
     user :{
        type : mongoose.Schema.Types.ObjectId
     },

     likes:{
         type : Number
      },

      noOfRetweets : {
         type : Number
      },

      comment:{
         type : String
      },

    onModel:{
        type : String,
        required : true,
        enum : ["Tweet","Comment"]  //saying comment can be on tweet or on a comment
    },
    commentable:{   //it will automatically choose which of the above model to use tweet or comment
        ype : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath:'onModel'
    }
})

const  Comment = mongoose.model('Comment',likeSchema) // it creates model out of schema and remember to start your model name with Captital letter

export default Comment;