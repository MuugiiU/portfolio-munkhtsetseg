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
      <div>
        <FaAddressBook />
        <input type="text" placeholder="Name" className={styles.input} />
        <FaRegEnvelope />
        <input type="e-mail" placeholder="Email" className={styles.input} />
        <input type="number" placeholder="Phone" className={styles.input} />
      </div>
    </div>
  );
};

export default Contact;
