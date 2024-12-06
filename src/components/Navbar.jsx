import React from "react";
import styles from "./Navbar.module.css";
import logo from "../photos/iit_kgp_logo.png";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_title}>
        <img src={logo} alt="IIT_KGP_LOGO" className={styles.logo} />
        <div className={styles.title}>YEARBOOK</div>
      </div>
      <div className={styles.navbar_icons}>
        <div className={styles.icon} id={styles.home}>
          Home
        </div>
        <div className={styles.icon} id={styles.trending}>
          Trending
        </div>
        <div className={styles.icon} id={styles.fill_itch}>
          Fill Itchlist
        </div>
        <div className={styles.icon} id={styles.view_itch}>
          View Itchlist
        </div>
        <div className={styles.icon} id={styles.testimonial}>
          Testimonial
        </div>
        <div className={styles.icon} id={styles.polls}>
          Polls
        </div>
      </div>
      <div className={styles.profile_icons}>
        <div id={styles.search}>
          < BsSearch className={styles.search}/>
          <p >Search</p>
        </div>
        <div className={styles.bell_icon}>
            <FaRegBell />
        </div>
        <div className={styles.profile}><CgProfile id={styles.profile}/></div>
      </div>
    </div>
  );
}

export default Navbar;
