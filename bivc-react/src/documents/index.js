import React from "react";
import Nav from "../nav";
import { useState } from "react";

const Docs = () => {

    let[year, setYear] = useState("2023")

    return(

    <div className="text-white">
        <Nav/>
        <div>
            <h1>
                Documents
            </h1>


            Charters
        </div>
    </div>


 );
};
export default Docs;