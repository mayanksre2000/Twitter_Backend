import mongoose from "mongoose";
import bcrypt from "bcrypt"; 
const {Schema} = mongoose;
import {ObjectId} from 'bson';

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

userSchema.pre ('save',function(next)   //its a pre method that will be triggered beforing saving
{
    const user = this;
    const salt = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password,salt)
    user.password = encryptedPassword;
    next();
})

userSchema.methods.comparePassword  = function compare(password){
   const user = this;
   return bcrypt.compareSync(password,user.password)
}


userSchema.methods.genJWT  = function generate(){
   return jwt.sign({
       id:this._id,
       email:this.email
   },'twitter_secret',{
       expiresIn:'2h'
   })
   
}

const  User = mongoose.model('User',userSchema) // it creates model out of schema and remember to start your model name with Captital letter

export default User;

