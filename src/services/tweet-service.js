import  TweetRepository  from '../repository/tweet-repository.js';
import  HashtagRepository  from '../repository/hashtag-repository.js';


class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    //data will be like--------------may be only comment is given at first
        //     content: "My second Tweet!! #secondTweet",
        //     likes: 47,
        //     noOfRetweets : 9,
        //     comment: "My second Tweet"
        
    async create(data) {
        const content = data.content;

        const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).  //it will give array of all the hashtag in the tweet,/g states globally means give all hashtag
        map((tag) => tag.substring(1).toLowerCase());   // then we remove # from it (see we are taking substring from 1 excluding 0(i,e #)) and by using map,iterating over all and applying function on each tag given after arrow sign

        const tweet = this.tweetRepository.create(data); //storing the tweet
        console.log('hi');
         
        //storing the hashtags
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags); //finding out which are already present in the database giving a json object
        let textOfPresentTags = alreadyPresentTags.map(tags => tags.text) // it will convert object into array
        let newTags = tags.filter(tag=> !alreadyPresentTags.includes(tag));  //it will fillter out tags present in curr.tweet but not in database so we have to add them4
        newTags = newTags.map(tag => {  //converting above array into object one by one so it can be inserted into the database 
            return {
                text : tag,
                tweets: [tweet.id]
            }
        })
        console.log('hey');
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweet.push(tweet.id);
            tag.save();

        })
        return tweet;
    } 

    async getTweet(tweetId){
        const tweet = this.tweetRepository.getTweet(tweetId);
        return tweet
    }
}
export default TweetService; 