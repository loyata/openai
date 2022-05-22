import PostMessage from '../models/posts.js'
import pkg from 'geoip-lite';
const {lookup} = pkg;


export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find().sort({createdAt: -1});
        res.status(200).json(posts);
    }catch (e){
        res.status(409).json({messsge: e.message});
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geoData = lookup(ip);
    let location, country;
    if(geoData === null){
        location = 'Ottawa, ON, CA';
        country = 'CA';
    }else {
        location = `${geoData.city}, ${geoData.region}, ${geoData.country}`;
        country = geoData.country;
    }
    const newPost = new PostMessage({...post, createdAt: new Date().toISOString(), location, country});
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch (e){
        res.status(409).json({messsge: e.message});
    }
}