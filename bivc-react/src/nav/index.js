
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
<nav class="navbar navbar-dark navbar-expand-lg">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="Docs">
  <Link className="navbar-brand" to="/">Home</Link> 

    <ul class="navbar-nav">
      <li class="nav-item dropdown d-flex">
        <h5 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Documents
        </h5>
        <ul class="dropdown-menu list-group-mine">
          <li><Link class="dropdown-item">By Laws and Ordinances</Link></li>
          <li><Link class="dropdown-item">Charters</Link></li>
          <li><a class="dropdown-item">Something else here</a></li>
        </ul>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item dropdown d-flex">
        <h5 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Meetings
        </h5>
        <ul class="dropdown-menu list-group-mine">
          <li><Link class="dropdown-item">Upcoming Meetings</Link></li>
          <li><Link class="dropdown-item">Minutes</Link></li>
          <li><a class="dropdown-item">Something else here</a></li>
        </ul>
      </li>
    </ul>
  </div>

</div>
</nav>

    );
};
export default Nav;