import KEY from '../env.js'
import axios from 'axios';
const OPENAI_SECRET = KEY.OPENAI_SECRET;

const data = {
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
};


const instance = axios.create({
    headers: {
        'Authorization': `Bearer ${OPENAI_SECRET}`,
        'Content-Type': 'application/json',
    },
});

const baseURL = "https://open-ai-playground.herokuapp.com"
// const baseURL = "http://localhost:5010"

export const getResponse = (prompt, model) => instance.post(`https://api.openai.com/v1/engines/${model}/completions`, {...data, prompt});
export const getPosts = () => axios.get(`${baseURL}/posts`);
export const createPost = (newPost) => axios.post(`${baseURL}/posts`, newPost);


