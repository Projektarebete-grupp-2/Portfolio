import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/Team">
        <Button>Team</Button>
      </Link>
      <Link to="/Skills">
        <Button>Skills</Button>
      </Link>
      <Link to="/About">
        <Button>About</Button>
      </Link>
      <Link to="/ContactPage">
        <Button>Contact us</Button>
      </Link>
      <Link to="/Project">
        <Button>Project</Button>
      </Link>
    </div>
  );
}

export default Nav;
