import React from 'react';
import './styles.css';
import yt1s from './yt1s.mp4';

//import ReactPlayer from "react-player"
// <ReactPlayer  width="100%" height="460px"
//url="https://www.youtube.com/embed/ug50zmP9I7s?autoplay=1&mute=1&controls=0&modestbranding=1" frameborder="0" allowfullscreen
// />
export default  () => {

    const video = document.getElementById("myVideo");
    const btn = document.getElementById("myBtn");
    
    const myFunction= (e)=> {
        e.preventDefault();
      if (video.paused) {
        video.play();
        btn.innerHTML = "لؤلؤ";
      } else {
        video.pause();
        btn.innerHTML = "لؤلؤ";
      }
    }

    return (
        <div>

       <div>
            <video autoPlay muted  controls  loop id="myVideo" className="myVideo">
                <source src={yt1s} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="t">
            <button id="myBtn" onclick={myFunction} className="myBtn">لؤلؤ</button>
            </div>
           </div> 
      </div>
        
    )
}

