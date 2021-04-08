import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer = () =>{
    return(
        <div>
            <Paper style={{textAlign:'center', height:60, paddingTop: 20,}}>
                <CopyrightIcon style={{fontSize:'small'}}/> 2021. Challenge by frontend Mentor. Coded by @kima063.
                

            </Paper>
        </div>
    )
}

export default Footer;