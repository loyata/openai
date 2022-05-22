import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {getPosts, getResponse} from "../../api/index.js";
import Post from "./Post/Post.js";



const Posts = ({update, isLoading}) => {

    const [posts, setPosts] = useState([]);



    useEffect(()=>{
        const fetchPosts = async () => {
            const res = await getPosts();
            setPosts(res.data);
        }
        fetchPosts();
    },[update])




    if(posts === undefined) return null;

   return (
       <div>
           <Typography variant={"h4"}>
               Responses
           </Typography>
           <br/>
           {isLoading? <CircularProgress/>:
               (           <Grid container alignItems="stretch" spacing={1}>
                   {
                       posts.map((post, index)=>{
                           return(
                               <Grid item key={index} xs={12}>
                                   <Post post={post}/>
                               </Grid>)
                       })
                   }
               </Grid>)
           }

       </div>
   );
}

export default Posts;