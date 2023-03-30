import React from "react";
import VideoSlot from "./VideoSlot";

const Card = function(props)
{
    return(
        <div className="card">
            <img className="pic" src={props.pic} alt ="Pic Not Found" />
            <VideoSlot cla ={props.cla} vlink = {props.vlink} />
            <p>{props.info}</p>
        </div>
    );
}
export default Card;