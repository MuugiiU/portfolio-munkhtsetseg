import React from "react";
import styles from "./styles.module.css";
import { FaAddressBook } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Contact = () => {
  return (
    <div className="row">
      <h1 className={styles.h1}>Холбоо барих</h1>
      <div className="col col-md-6 col-sm-12">
        <img src="./img/contact.png" alt="" className={styles.pic} />
      </div>
      <div className="col col-md-6 col-sm-12">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FaAddressBook className={styles.icon} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Нэр"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            {" "}
            <FaRegEnvelope className={styles.icon} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Имэйл"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            {" "}
            <FaPhoneSquareAlt className={styles.icon} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Утасны дугаар"
            aria-label="Number"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={5} placeholder="Message" />
        </Form.Group>
      </div>
    </div>
  );
};

export default Contact;
