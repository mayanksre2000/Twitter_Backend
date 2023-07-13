import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({ 
    user :{
        type : mongoose.Schema.Types.ObjectId
     },
    onModel:{
        type : String,
        required : true,
        enum : ["Tweet","Comment"]  //saying like can be on tweet or on a comment
    },
    likeable:{  //it will automatically choose which of the above model to use ,tweet or comment
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath:'onModel'
    }
})
const  Like = mongoose.model('Like',likeSchema) // it creates model out of schema and remember to start your model name with Captital letter

export default Like;