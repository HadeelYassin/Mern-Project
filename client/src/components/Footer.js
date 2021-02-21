import React from 'react'
import { Card } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
    
    return (
        <div>
            <Card style={{backgroundColor:"#21262d", color:'whitesmoke', fontSize:'12px',position:'bottom',bottom:0}} elevation={3}>
                <p style={{marginBottom: 0}}>Movie Time © 2021</p>
                <FacebookIcon style={{ color: '#0168e4' }}/>
                <TwitterIcon style={{ color: '#1093f3' }}/>
                <InstagramIcon olor="pink"/>
            </Card>
        </div>
    )
}
export default Footer
