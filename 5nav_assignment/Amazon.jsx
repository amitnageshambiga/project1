import React from "react";

import STYLE from "./amazon.module.css";
const Amazon=()=>
{
    return(
        <div id={STYLE.a1}>
            <img src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png" alt=""/>
       <div id={STYLE.a2}>
<li>Home</li>
<li>Store</li>
<li>Channels</li>
<li>Categories</li>
<li>My stuff</li>
       </div>
      <div id={STYLE.a3}><button>Try for free</button>
      </div> 
      <a href="myprofile" id={STYLE.a4}>My profile</a>
        </div>
    )
}
export default Amazon;