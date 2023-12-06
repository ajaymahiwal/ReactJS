

import "./LikeButton.css";
import { useState } from "react";



export default function LikeButton(){
    let arr = useState(5);
    console.log(arr);
    
    let [isLiked,setState] = useState(false); //init
    let [count,setCount] = useState(0); //init

    let likeStyle = {backgroundColor:""};
    function buttonClicked(){
        arr[1](Math.ceil(Math.random()*50));
        console.log("clicked");
            console.log(`state of count during function calling ${arr[0]}, state changes during re-rendering.`);
            setState(!isLiked);
            setCount(count+1);
            // setCount((count)=>{
            //     return count+1;
            // });
        }
    return(
        <div className="heart-box">
            {isLiked?
            <div className="heart clicked" onClick={buttonClicked} style={likeStyle}>{arr[0]}</div>:
            <div className="heart" onClick={buttonClicked}>{arr[0]}</div>
            }
        </div>
    );
}