import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async(req,res) =>{
    try {
        console.log(req.body);
        const data = req.body;
        console.log('hi');
        const response = await tweetService.create(data);
        return res.status(201).json({
            success:true,
            message:"successfully created a tweet",
            data :response,
            err :{}
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error Encountered",
            data :{},
            err : error
        })
    }
}
export const getTweet = async(req,res) =>{
    try {
        const id = req.params.id;
        const response = await TweetService.getTweet(id);
        return res.status(201).json({
            success:true,
            message:"successfully got a tweet",
            data :response,
            err :{}
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error Encountered",
            data :{},
            err : error
        })
    }
}
