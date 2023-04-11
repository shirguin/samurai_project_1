import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <a href="/profile" className={`${classes.item} ${classes.active}`}>
          Profile
        </a>
      </div>
      <div>
        <a href="/dialogs" className={classes.item}>
          Message
        </a>
      </div>
      <div>
        <a className={classes.item} href="#">
          News
        </a>
      </div>
      <div>
        <a className={classes.item} href="#">
          Music
        </a>
      </div>
      <div>
        <a className={classes.item} href="#">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
