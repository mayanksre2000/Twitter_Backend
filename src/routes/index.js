import express from 'express';
import  {createTweet}  from '../controller/tweet-controller.js'; //isme createTweet {} isme aaya kyonki waha default se export nahi kya

const router = express.Router();

router.post('/tweet',createTweet);

export default router;