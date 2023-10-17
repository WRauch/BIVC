
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
<nav class="navbar navbar-dark navbar-expand-lg mb-2">
<div class="container-fluid">
<Link className="navbar-brand" to="/">Home</Link> 

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Docs" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className=" collapse navbar-collapse" id="Docs">


    <ul class="navbar-nav">
      <li class="nav-item dropdown d-flex">
        <h5 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          BIVC Information
        </h5>
        <ul class="dropdown-menu list-group-mine">
          <li><Link class="dropdown-item" to={"/overseers"}>Board of Overseers</Link></li>
          <li><Link class="dropdown-item" to={"/planning"}>Planning Board</Link></li>
          <li><Link class="dropdown-item" to={"/docs"}>Documents</Link></li>
          <li><Link class="dropdown-item" to={"/orginization"}>Organization</Link></li>
          <li><Link class="dropdown-item" to={"/guide"}>Owner's And Renter's Guide</Link></li>

        </ul>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item dropdown d-flex">
        <h5 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Local Information
        </h5>
        <ul class="dropdown-menu list-group-mine">
          <li><Link class="dropdown-item">Town of Freeport</Link></li>
          <li><Link class="dropdown-item">State of Maine</Link></li>
          <li><Link class="dropdown-item">Tide Charts</Link></li>
          <li><Link class="dropdown-item">Casco Bay</Link></li>
          <li><Link class="dropdown-item">Casco Bay Marine Forecast</Link></li>
          <li><Link class="dropdown-item" to={"http://www.nfpa.org/Public-Education/By-topic/Wildfire/Firewise-USA"}>Firewise</Link></li>

        </ul>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item dropdown d-flex">
        <h5 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Island Organizations
        </h5>
        <ul class="dropdown-menu list-group-mine">
          <li><Link class="dropdown-item" to={"https://cabustinsisland.wordpress.com/"}>CABI Website</Link></li>
          <li><Link class="dropdown-item" to={"https://bustinsislandhistoricalsociety.yolasite.com/"}>Bustins Island Historical Society</Link></li>
          <li><Link class="dropdown-item" to={"https://www.facebook.com/Bustins-Island-Community-101927616162/"}>Bustins Island Community</Link></li>
          <li><Link class="dropdown-item" to={"https://bivc.net/docs/BBF.pdf"}>Bustins & Bay Foundation</Link></li>

        </ul>
      </li>
    </ul>

    <ul class="navbar-nav">
      <li class="nav-item dropdown d-flex">
        <h5 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service Providers
        </h5>
        <ul class="dropdown-menu list-group-mine">
          <li><Link class="dropdown-item" to={"http://vinalenergy.com/"}>Vinal Energy</Link></li>
          <li><Link class="dropdown-item" to={"http://brewersouthfreeport.com/"}>Brewer Marine</Link></li>
          <li><Link class="dropdown-item" to={"http://www.stroutspoint.com/"}>Strout's Point Wharf</Link></li>
          <li><Link class="dropdown-item" to={"http://www.coastalbarge.com/"}>Coastal Barge & Mooring</Link></li>
        </ul>
      </li>
    </ul>
  </div>
  </div>
</nav>

    );
};
export default Nav;