import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import moment from "moment";
import {Paper} from "@mui/material";

const Post = ({post}) => {
    return (
        <Paper variant={"outlined"}>
            <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={post.country} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${post.country}.svg`} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={post.prompt}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {post.model}
                                </Typography>
                                {post.response}
                            </React.Fragment>
                        }

                    />
                </ListItem>
                <Typography variant={"body2"} sx={{paddingLeft:"72px", paddingBottom:"3px", fontStyle:"italic"}}>
                    User from {post.location} &nbsp;&nbsp;&nbsp;&nbsp;
                    Created {moment(post.createdAt).fromNow()}
                </Typography>
                {/*<Divider variant="inset" component="li" />*/}
            </List>
        </Paper>

    );
}

export default Post;