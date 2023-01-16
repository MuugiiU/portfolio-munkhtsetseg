import React from "react";
import styles from "./styles.module.css";
import { FaAddressBook } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div>
        <h2 className={styles.garchig}>Contact Us</h2>
      </div>
      <div className={styles.input}>
        <FaAddressBook />
        <input type="text" placeholder="Name" />
        <FaRegEnvelope />
        <input type="e-mail" placeholder="Email" />
        <input type="number" placeholder="Phone" />
      </div>
    </div>
  );
};

export default Contact;
