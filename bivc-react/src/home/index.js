import React from "react";
import "./index.css";
import Nav from "../nav";

const Home = () => {
 return(

    <div className="">

   <Nav/>

  <img src="bivc_logo.jpg" class="center"/>

  <div class="row mt-2">


  <div class=" col-12 col-lg-6 mt-2">
      <ul class="list-group list-group-mine">
          <li class="list-group-item">
              <h3 class="center-text">
                  Seasonal Info
              </h3>
          </li>
          <li class="list-group-item">
          <div class="bg-danger d-flex align-items-center justify-content-center fw-bold font-med">
                            ANY Emergency - read &nbsp; <a href="docs/Other/S - Emergency Basics.pdf">  Emergency Basics </a> &nbsp; & call 911

                        </div>
          Ferry Phone: (207) 751-2283
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