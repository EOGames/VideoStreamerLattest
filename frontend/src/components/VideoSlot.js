import React from "react";

const VideoSlot = (props) => (
 
    <iframe className= {props.cla}      
      src={props.vlink}
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  
);


export default VideoSlot;