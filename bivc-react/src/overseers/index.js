import React from "react";
import Nav from "../nav";
import { useState } from "react";

const Overseers = () => {

    let[year, setYear] = useState("2023")

    return(

    <div className="text-white">
        <Nav/>

        <div>
            <h1>
                Board of Overseers
            </h1>
        <div class="row mt-2">

        <div class="col-12 col-lg-6 mt-2">


              <h3 class="center-text">
              Meeting Schedule              
              </h3>
          Board of Overseers: &nbsp;
        <a href="docs/Seasonal/Meeting%20Schedule.pdf">Board Of Overseers Meeting Schedule</a>
        <br/>

        <a href="https://us02web.zoom.us/j/89571403417?pwd=QzFEZXVCT1ZUWlBLdEU0Wmt2RTBndz09"> 
        Zoom Meeting </a> - Meeting ID: 895 7140 3417 <div>Passcode: 385710 </div>
        <a href="docs/Seasonal/Off Season Meetings.pdf">Off Season Overseers Meeting Announcement</a>


        </div>
        
    <div class="col-12 col-lg-6 mt-2">

    <ul class="list-group list-group-mine">
          <li class="list-group-item">
        <h3 class="center-text">
        Minutes
        </h3>


        <div className="input-group-append float-end">

        <select class="custom-select" id="yearselect" onChange={(x) => setYear(x.target.value)}>
            <option selected value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>

        </div>
        {year === '2023' && "Minutes from 2023"}
        {year === '2022' && "Minutes from 2022"}
        {year === '2021' && "Minutes from 2021"}
        {year === '2020' && "Minutes from 2020"}
        {year === '2019' && "Minutes from 2019"}
        {year === '2018' && "Minutes from 2018"}        
        {year === '2017' && "Minutes from 2017"}
        {year === '2016' && "Minutes from 2016"}
        {year === '2015' && "Minutes from 2015"}
        {year === '2014' && "Minutes from 2014"}
        {year === '2013' && "Minutes from 2013"}
        {year === '2012' && "Minutes from 2012"}

        

        </li>
        </ul>
    </div>

    </div>
</div>
</div>


 );
};
export default Overseers;