import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import logo from '../../images/logo.png'
// import useStyles from "./styles";

const Navbar = () => {
    // const classes = useStyles();
    return (
        <div>
            <AppBar position={"static"} sx={{backgroundColor: 'rgba(57,170,213,0.5)'}} >
                <Toolbar>
                    <img src={logo} alt="logo" width={"150px"} style={{margin:"5px 10px"}}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;

