import React from "react";
import "./index.css";
import Nav from "../nav";

const Home = () => {
 return(

    <div className="">

   <Nav/>

  <img src="bivc_logo.jpg" class="center"/>

  <div class="row mt-2">

  <div class="col-12 col-lg-6 mt-2">
    <h3 className="white-font center-text">Event Schedule</h3>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&src=ZjhiZGI2ZjU2ZThlNDU2MjkyYWQ4ZTI2ODhjZDNmOTE0Y2QxNmU2ZjUzNTE4Y2I5N2YyMmU0ZDJkZjcyYjQxNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%230B8043"
      width="100%" height="400px" frameborder="2"></iframe>
  </div>

  <div class="col-12 col-lg-6 mt-2">
      <ul class="list-group list-group-mine">
                        <li class="list-group-item">
                            <div class="center-text">
                                Announcements
                            </div>
                        </li>
                        <li class="list-group-item">
                        </li>
                    </ul>
                    </div>


</div>
    </div>

 );
};
export default Home;