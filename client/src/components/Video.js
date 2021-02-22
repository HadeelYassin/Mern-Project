import React from 'react';
import '../styles/styles.css';
import yt1s from './yt1s.mp4';
import quiet  from './place.mp4'
import invisible from './the.mp4';
import purge from './purge1.mp4';
import purge2 from './purge.mp4';
import teaser from './teaser.mp4';
import Carousel from 'nuka-carousel';
export default  () => {

  


    return (
        <div>

       <div>
      <Carousel>
        <video  autoPlay muted  controls   id="myVideo" className="myVideo" >
                <source src={teaser} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
      
       <video autoPlay muted  controls   id="myVideo"  className="myVideo" >
                <source src={purge2} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <video autoPlay muted  controls  id="myVideo" className="myVideo" >
                <source src={quiet} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <video autoPlay muted  controls   id="myVideo" className="myVideo" >
                <source src={yt1s} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <video autoPlay muted  controls   id="myVideo" className="myVideo" >
                <source src={invisible} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <video autoPlay muted  controls   id="myVideo" className="myVideo" >
                <source src={purge} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
           </Carousel>
           
           
            <div className="t">
            
             

            </div>
           </div> 
      </div>
        
    )
}

