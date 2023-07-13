import Hashtag from "../models/hashtag.js"; 
import CrudRepository from "./crud-repository.js";
class HashtagRepository extends CrudRepository{

    constructor(){
        super(Hashtag)
    }
      //it will creare a single hashtag  which will now done by crud repo
    // async create(data)    
    // {
    //     try{
    //           let hashtag = await Hashtag.create(data);//see in main index.js how your data will look like(in json type) and .create is an inbuilt function
    //           return hashtag;
    //     }     
    //     catch(error){
    //         console.log(error);
    //         throw error;

    //     }
    // }
    async bulkCreate(data)    
    {
        try{
              let hashtags = await Hashtag.insertMany(data);
              return hashtags;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }
    async findByName(text)    
    {
        try{
              let tag = await Hashtag.find({
                text:text
              });
              return tag;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }

    async getHashtag(id)    
    {
        try{
              let tag = await Hashtag.findById(id);
              return tag;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }

    async deleteHashtag(data)    
    {
        try{
              let hashtag = await Hashtag.deleteOne(data);//it will return an array of all
              return hashtag;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }
}

export default HashtagRepository;