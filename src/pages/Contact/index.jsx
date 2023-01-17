import React from "react";
import styles from "./styles.module.css";
import { FaAddressBook } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div>
        <h2 className={styles.garchig}>Contact Us</h2>
      </div>
      <div className="">
        <div className={styles.flex}>
          <FaAddressBook className={styles.icon} />
          <input type="text" placeholder="Name" className={styles.in} />
        </div>
      </div>
      <div className={styles.hi}>
        <div className={styles.flex}>
          <FaRegEnvelope className={styles.icon} />
          <input type="e-mail" placeholder="Email" className={styles.in} />
        </div>
      </div>
      <div>
        <div className={styles.flex}>
          <FaPhoneSquareAlt className={styles.icon} />
          <input type="number" placeholder="Phone" className={styles.in} />
        </div>
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default Contact;
