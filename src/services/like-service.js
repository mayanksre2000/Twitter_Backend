import LikeRepository from '../repository/like-repository.js'
import TweetRepository from '../repository/tweet-repository.js'

class LikeService {
    constructor() {
        this.likeRepository =new LikeRepository();
        this.tweetRepository =  new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId) {  //modelid is the id(if its tweet its id of that tweet ,if its comment its id of comment),modelType is that its either tweet or comment
        let likeable;
        if(modelType === 'Tweet') {
            likeable = await this.tweetRepository.getTweet(modelId)
        }
        else if(modelType === 'Comment') {
            //Todo
        }
        else{
            console.log("wrong modeltype")
        }
        const exists = await this.likeRepository.findByUserAndLikeable({  //check if its aready liked or not
            user:userId,
            onModel: modelType,
            likeable:modelId
        })
        console.log("alreadypresent",exists)
        let isAdded;
        if(exists)         //if its already liked ,unlike it
        {
            likeable.likes.pull(exists.id);
            await likeable.save();
            this.likeRepository.destroy(exists.id)
            isAdded =false;
        }
        else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel: modelType,
                likeable:modelId 
            })
            likeable.likes.push(newLike);    //tweet or comment repo(in this case tweet or comm. on which like is done ) ke likes ki array mein push kardo
            await likeable.save();
            isAdded =true;
        }
        console.log(isAdded)
        return isAdded;

    }
}


export default LikeService;