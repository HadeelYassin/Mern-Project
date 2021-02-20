import React from 'react'
import { Card } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
    
    return (
        <div>
            <Card style={{backgroundColor:"#21262d", color:'whitesmoke', fontSize:'12px'}} elevation={3}>
                <p>Movie Time © 2021</p>
                <FacebookIcon color="primary"/>
                <TwitterIcon/>
                <InstagramIcon olor="secondary"/>
            </Card>
        </div>
    )
}

export default Footer
