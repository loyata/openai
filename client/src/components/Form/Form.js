import React, {useState, useEffect} from 'react';
import {Paper, Box, Typography, TextField, Button, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import useStyles from "./styles.js";
import {getResponse, createPost} from "../../api/index.js";



const Form = ({getUpdateInfo,setIsLoading}) => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        prompt:'',
        model:'',
        response:'',
    })

    const clearSubmit = ()=>{
        setPostData({
            prompt:'',
            model:'',
            response:'',
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const {data} = await getResponse(postData.prompt, postData.model);
        setIsLoading(false);
        const response = data.choices[0].text;
        await createPost({...postData, response});
        getUpdateInfo();
    }

    return (

        <Paper className={classes.paper} elevation={4} sx={{marginTop:"10px"}}>
            <form noValidate autoComplete="off" className={`${classes.form}`} onSubmit={handleSubmit}>
                <Typography className={classes.spacing} variant="h5" sx={{marginBottom:"10px"}}>
                   Enter prompt
                </Typography>
                <FormControl fullWidth sx={{marginBottom:"10px"}}>
                    <InputLabel id="demo-simple-select-label">Choose a model</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={postData.model}
                        label="Choose a model"
                        onChange={(event)=>{setPostData({...postData, model:event.target.value})}}
                    >
                        <MenuItem value={"text-curie-001"}>text-curie-001</MenuItem>
                        <MenuItem value={"text-babbage-001"}>text-babbage-001</MenuItem>
                        <MenuItem value={"text-ada-001"}>text-ada-001</MenuItem>
                        <MenuItem value={"text-davinci-002"}>text-davinci-002</MenuItem>
                    </Select>
                </FormControl>
                <TextField className={classes.spacing} name="message" label="Message" variant="outlined" multiline minRows={3} maxRows={6} fullWidth value={postData.prompt} onChange={(event) => {setPostData({...postData, prompt: event.target.value});}}/>
                <Box display={"flex"} justifyContent={"end"} marginTop={1}>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit">Submit</Button> &nbsp;&nbsp;
                    <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clearSubmit}>Clear</Button>
                </Box>
                 </form>
        </Paper>

    );
}

export default Form;