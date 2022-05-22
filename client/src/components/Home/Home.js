import React, {useState} from 'react';
import {Container, Grow} from "@mui/material";
import Form from "../Form/Form.js";
import Posts from "../Posts/Posts.js";


const Home = () => {

    const [update, setUpdate] = useState(false); //Fetching when sending new Posts
    const [isLoading, setIsLoading] = useState(false); //Checking if API is loading

    const getUpdateInfo = () => {
        setUpdate(!update);
    }


    return (
        <div>
            <Grow in>
                <Container maxWidth={"lg"}>
                    <Form getUpdateInfo={getUpdateInfo} setIsLoading={setIsLoading}/>
                    <br/>
                    <Posts update={update} isLoading={isLoading} />
                </Container>
            </Grow>
        </div>
    );
}

export default Home;