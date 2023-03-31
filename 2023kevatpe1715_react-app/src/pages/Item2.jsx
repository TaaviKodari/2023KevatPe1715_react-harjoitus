import React from "react";

export const Item2 = (props)=>{
    return(
        <div>
            <p>Title: {props.title}</p>
            <p>Description: {props.description}</p>
            <img src={props.img}/>
        </div>
    );
}