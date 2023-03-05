 import React from "react";

 import STYLE from "./prajakeeya.module.css";
 var Prajakeeya=()=>
 {
    return(
        <div className={STYLE.p1}>
<img className={STYLE.i1} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Prajakeeya_Party_Logo_1.png/640px-Prajakeeya_Party_Logo_1.png" alt=""/>
<div className={STYLE.p2}>
<li className={STYLE.p3}>Home</li>
<li className={STYLE.p4}>Aspirant Registration</li>
<li className={STYLE.p5}>Aspiirant List</li>
<li className={STYLE.p6}>Selected Aspirant</li>
<li className={STYLE.p7}>Feedback</li>
</div>
<div className={STYLE.p8}>
<button>Kannada</button>
</div>
</div>
    )
 }
 export default Prajakeeya;
