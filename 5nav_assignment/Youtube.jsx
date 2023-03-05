import React from "react";
import STYLE from "./youtube.module.css";

const Youtube=()=>
{
    return(
<div id={STYLE.y1}>
<img id ={STYLE.y3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-P5J2OuIL6vwnRker2p-4fK4KBrwDGUBUQ&usqp=CAU" alt=""/>
<div id={STYLE.y2}>
<li>Home</li>
<li>Explore</li>
<li>Library</li>
<li>Upgrade</li>
<li><input type="search" placeholder="search"/></li>
</div>
</div>

    )
}
export default Youtube;