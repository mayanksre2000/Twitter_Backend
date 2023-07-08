import Tweet from "../models/tweet.js"; 

class TweetRepository{

    async create(data)    
    {
        try{
              let tweet = await Tweet.create(data);//see in main index.js how your data will look like(in json type) and .create is an inbuilt function
              return tweet;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }
    async getAllTweets()    
    {
        try{
              let tweets = await Tweet.find({});//it will return an array of all
              return tweets;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }

    async getTweet(id)    
    {
        try{
              let tweet = await Tweet.findById(id);//it will return an array of all
              return tweet;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }

    async deleteTweet(data)    
    {
        try{
              let tweet = await Tweet.deleteOne(data);//it will return an array of all
              return tweet;
        }     
        catch(error){
            console.log(error);
            throw error;

        }
    }
}

export default TweetRepository;