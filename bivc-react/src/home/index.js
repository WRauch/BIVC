import React from "react";
import "./index.css";
import Nav from "../nav";

const Home = () => {
 return(

    <div className="">

   <Nav/>

  <img src="bivc_logo.jpg" class="center max-height"/>

  <div class="row">


  <div class=" col-12 col-lg-6 mt-2">
      <ul class="list-group list-group-mine ">
          <li class="list-group-item">
              <h3 class="center-text">
                  Seasonal Info
              </h3>
              <div class="bg-danger d-flex justify-content-center text-center fw-bold font-med">
                <div>
                ANY Emergency Read &nbsp; <a href="docs/Other/S - Emergency Basics.pdf">  Emergency Basics </a> 
                &nbsp; & call 911
                </div>

                        </div>
          </li>
          <li class="list-group-item">

        <h4 className=" d-flex align-items-center justify-content-center">Lilly B.</h4>
        {/* <img src="lillyb.jpg" width="30%" height="200%" class="img-fluid d-flex float-end " alt="Responsive image"/> */}

        <div className="d-flex justify-content-center text-center">
          <div>
          Ferry Phone: (207) 751-2283
        <br/>


        <a href="docs/Seasonal/Ferry%20Schedule.pdf">Ferry Schedule and Rates</a><br/>
        <a href="docs/Seasonal/Freight List v1.0.pdf">Ferry Freight Rate List</a><br/>
          </div>

        </div>

          </li>
        <li class="list-group-item">
            <h4 className=" d-flex align-items-center justify-content-center">
                Island Truck
            </h4>
            {/* <img src="bivc-truck.jpg" width="40%" class="img-fluid d-flex float-end " alt="Responsive image"/> */}


            <div className="d-flex justify-content-center text-center">
          <div>
            Truck Service starts Friday May 19<br/>
            Truck Phone: (207) 233-8368<br/><br/>

            Trash Service Begins May 29<br/>
            <a href="docs/Policies/120 Trash Disposal Policy.pdf">Trash Disposal Policy</a><br/>
            <a href="docs/Seasonal/Trash Fee Rates.pdf">Trash Fee Rates</a><br/>

          </div>
          </div>
        </li>
        <li class="list-group-item">
        <h4 className=" d-flex align-items-center justify-content-center">
                Island Services
            </h4>
            <b>BIVC wells</b> open for the first time on May 6. <br/>
                                <a href="docs/Seasonal/Well%20Schedule.pdf">Well Schedule</a><br/><br/>
                                The <strong>Post Office</strong> will open on Friday, June 23, 2023, <br/>
                                 and will close on Saturday, September 2, 2023. <br/>
                             <br/>

        </li>
        </ul>
    </div>

  <div class="col-12 col-lg-6 mt-2">
  <ul class="list-group list-group-mine">
                        <li class="list-group-item">
    <h3 className="white-font center-text">Event Schedule</h3>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&src=ZjhiZGI2ZjU2ZThlNDU2MjkyYWQ4ZTI2ODhjZDNmOTE0Y2QxNmU2ZjUzNTE4Y2I5N2YyMmU0ZDJkZjcyYjQxNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%230B8043"
      width="100%" height="400px" frameborder="2"></iframe>
                              </li>
                    </ul>
  </div>






</div>
  </div>

 );
};
export default Home;