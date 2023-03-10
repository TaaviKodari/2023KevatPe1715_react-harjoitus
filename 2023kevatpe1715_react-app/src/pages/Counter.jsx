import React from "react";
import {useState, useEffect} from "react";

export const Counters = ()=>{
    const[count, setCount] = useState(0);

    useEffect(()=>{
        setCount(count+1);
    });

    return(
        <div>
            <h1>I've rendered {count} time!</h1>
        </div>
    );
}