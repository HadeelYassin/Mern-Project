import React from 'react'
import { colors, Paper } from '@material-ui/core';
import { Card } from '@material-ui/core';


const Footer = () => {
    
    return (
        <div>
            <Card style={{backgroundColor:"#161c27", color:'whitesmoke', fontSize:'12px'}} elevation={5}>
                <p>© 2021 Movie Time</p>
                
            </Card>
        </div>
    )
}

export default Footer
