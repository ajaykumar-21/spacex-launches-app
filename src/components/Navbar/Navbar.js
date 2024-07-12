import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav className={styles.navBar}>
        <Link className={styles.link} to="/login">
          Login
        </Link>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/signup">
          Signup
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
