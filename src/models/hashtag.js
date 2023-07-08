import mongoose from "mongoose";
// const {Schema} = mongoose;

const hashtagSchema = new mongoose.Schema({
    text:{
       type : String,
       required:true,
       unique:true
    },
    tweets:[        // its an array as I can have many tweets for paticular hashtag
        {     
        type : mongoose.Schema.Types.ObjectId
     }
    ]
});

const Hashtag = mongoose.model('Hashtag',hashtagSchema) // it creates model out of schema and remember to start your model name with Captital letter

export default Hashtag;