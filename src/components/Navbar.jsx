import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../photos/iit_kgp_logo.png";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
function Navbar({modeChange,Display}) {
  const [display,setdisplay]=useState('none')
  const  show_sidebar=()=>{
    if(display=='none'){

      setdisplay('flex')
    }
    else{
      setdisplay('none')
    }
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.tri_side}>
      <FaBars className={styles.tri_bar} onClick={show_sidebar}/>
      <div className={styles.side_bar} style={{display:`${display}`}}>
        <h3 id={styles.menu}>Menu</h3>
        <div className={styles.items} id={styles.home}>Home</div>
        <div className={styles.items} id={styles.trend}>Trending</div>
        <div className={styles.items} id={styles.fill}>Fill Itch List</div>
        <div className={styles.items} id={styles.view}>View Itch List</div>
        <div className={styles.items} id={styles.testimonial}>Testimonial</div>
        <div className={styles.items} id={styles.polls}>Polls</div>
      </div>

      </div>
      <div className={styles.logo_title}>
        
        <img src={logo} alt="IIT_KGP_LOGO" className={styles.logo} style={{height:'32px',position:'relative',top:'13px'}}/>
        <div className={styles.title}  style={{fontSize:'34px',position:'relative',bottom:'5px'}}>YEARBOOK</div>
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
        
          <input type="text" placeholder="Search" />
          
        </div>
        <div className={styles.bell_icon}>
            <FaRegBell />
        </div>
        <div className={styles.profile}><CgProfile /></div>
      </div>
      <button className={styles.modeChange} onClick={modeChange}>
           <IoSunnyOutline color='white'  id='light'></IoSunnyOutline>
           <MdDarkMode  style={{display:`${Display}`}} id='dark'></MdDarkMode>
        </button>
    </div>
  );
}

export default Navbar;
