import express from 'express';
import  {createTweet, getTweet}  from '../controller/tweet-controller.js'; //isme createTweet {} isme aaya kyonki waha default se export nahi kya
import {signIn, signUp} from '../controller/user-controller.js';
import { toggleLike } from '../controller/like-controller.js';
const router = express.Router();

router.post('/tweet',createTweet);
router.get('/tweet/:id',getTweet);
router.post('/signup',signUp);
router.post('/signIn',signIn);
router.post('/likes/toggle',toggleLike);

export default router;