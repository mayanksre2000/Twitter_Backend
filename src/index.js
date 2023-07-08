import express from "express";
import mongoose from "mongoose";
import {connect} from "./config/database.js"
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRepository from "./repository/tweet-repository.js";

const app = express();





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


    const tweetRepo = new TweetRepository();

    // let tweets = await tweetRepo.getAllTweets();
    // let tweet = await tweetRepo.getTweet('64a9b233d21c9553c2fae425');
    // let tweet = await tweetRepo.deleteTweet({
    //     "_id" : '64a9b233d21c9553c2fae425'        //remember the key "_id" is same as in mongo database else it will show deletedcount: 0
    // });
    // console.log(tweet);


})