import React from "react";
import JSON from "./JSON/userdata.json";
import "./JSON/global.css"
import Student from "./JSON/Student";

const App=()=>
{
    return(

        <Student payload={JSON}/>
)
}
export default App