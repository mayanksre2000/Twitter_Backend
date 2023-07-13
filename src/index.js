import express from "express"
import {connect} from "./config/database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";
// import passport from "passport";
// import { passportAuth } from "./middlewares/jwt-middleware.js";

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,async () => {
    console.log("server started at 3000");

    connect();
    console.log("MongoDB is Connected");

    // Hashtag.create({
    //        text : 'travel' ,    // like #travel
    //        tweets: ['64a9b19b82e1be0369b6f7dc']   //as every hashtag will have array of tweets
    //     })
    

    // Tweet.create({
    //     content: "My second Tweet!!",
    //     likes: 47,
    //     noOfRetweets : 9,
    //     comment: "My second Tweet"
    // })


    // const tweetRepo = new TweetRepository();

    // let tweets = await tweetRepo.getAllTweets();
    // let tweet = await tweetRepo.getTweet('64a9b233d21c9553c2fae425');
    // let tweet = await tweetRepo.deleteTweet({
    //     "_id" : '64a9b233d21c9553c2fae425'        //remember the key "_id" is same as in mongo database else it will show deletedcount: 0
    // });
    // console.log(tweet);-


})