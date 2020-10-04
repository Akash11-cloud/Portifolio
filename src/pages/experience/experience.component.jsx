import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/CHRP.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">VR Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">VR and AR Developer</strong>
                    <br />
                    <strong>Role:</strong> VR Developer & Production Support
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> of <strong>AR and VR</strong> Technology for learning new things.
                    <br />
                    <strong>Technology:</strong> C#
                    <br />
                    <strong>Duration:</strong> December 2020 - March 2021
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
