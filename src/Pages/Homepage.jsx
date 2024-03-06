import React from "react";
import CatatanList from "../components/CatatanList";

function Homepage({data}){
    return(
        <>
            <h1>ini Homepage</h1>
            <CatatanList data={data}/>
        </>
    )
}

export default Homepage;