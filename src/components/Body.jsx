import React from "react";
import styles from "./Body.module.css";
import photo from "../photos/Rupesh.1.jpg";
import { PiMedalDuotone } from "react-icons/pi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { BsBuilding } from "react-icons/bs";
function Body() {
  return (
    <div className={styles.super_container}>
      <div className={styles.container}>
        <div className={styles.photo}>
          <img src={photo} alt="user_photo" id={styles.photo} />
        </div>
        
        <div className={styles.info}>
          <div className={styles.name_caption}>
            <p>
              <h2>Rupesh Sahoo</h2>
            </p>
            <p>
              <h2>Your Caption Here!</h2>
            </p>
          </div>
          <div className={styles.profile}>
            <p id={styles.intro}>Introduction</p>
            <p className={styles.bio}>
              <PiMedalDuotone className={styles.icon}  />
              <div className={styles.data}>
              
              <p>Roll No:</p>
              <p>23EE10058</p>
            </div>
            </p>
            <p className={styles.bio}>
            <MdOutlineMapsHomeWork className={styles.icon}  />
            <div className={styles.data}>
              
              <p>Hall Of Residence:</p>
              <p>RadhaKrishnan</p>
            </div>
            </p>
            <p className={styles.bio}>
            <CiMail className={styles.icon}  />
            <div className={styles.data}>
              <p>Email:</p>
              <p>rs123@gmail.com</p>

            </div>
            </p>
            <p className={styles.bio}>
            <BsBuilding className={styles.icon} color="yellow" />
            <div className={styles.data}>
              <p>Department:</p>
              <p>Electrical Engineering</p>

            </div>
            </p>
            <input type="button" value="Edit Profile" className={styles.edit

            } />
          </div>
        </div>
        <div className={styles.write_testimonial}>Write Testimonials</div>
        <p className={styles.para}>Here is what your friends written about you! Your testimonials are displayed below. Ypu can approve or disapprove them by selecting the  option shown beside each testimonial. The approved ones shall be a part of your yearbook.</p>
        <div className={styles.triple_option}>
          <div className={styles.option}>Gallery</div>
          <div className={styles.option}>Testimonials</div>
          <div className={styles.option}>Articles</div>
        </div>
        <p className={styles.para} id={styles.para}>No Testimonials!</p>
      </div>
    </div>
  );
}

export default Body;
