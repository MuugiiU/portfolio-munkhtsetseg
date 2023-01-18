import React from "react";
import style from "./style.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Project = () => {
  return (
    <div id="Project" className="row">
      <div className="col col-md-6 col-sm-12">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./img/addplayer.png" />
          <Card.Body>
            <Card.Title>React Challange</Card.Title>
            <Card.Text>Add players remove,add,delete,sorter hiideg</Card.Text>
            <Button variant="btn-outline-primary"> Go Link</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col col-md-6 col-sm-12">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Project;
