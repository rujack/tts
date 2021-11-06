import React from "react";
import { Col, Row, Card, Container, Image } from "react-bootstrap";
import Foto1 from "../../img/Layer1.png";
import Foto2 from "../../img/Layer2.png";
import Foto3 from "../../img/Layer3.png";

const About = () => {
  return (
    <Container className="m-auto">
      <Row className="text-center mb-3">
        <h1 className="mb-4">My Team</h1>
        <Col>
          <Card
            className="border-0 bg-light bg-opacity-10 text-center m-auto mb-3"
            style={{ width: "18rem" }}>
            <Card.Body>
              <Image
                src={Foto1}
                alt="prof"
                className="w-100 rounded-pill shadow"
              />
              <Card.Title>Mabruri Kh</Card.Title>
              <Card.Subtitle className="mb-2" style={{ fontWeight: "200" }}>
                119229085
              </Card.Subtitle>

              <i className="fab fa-instagram"></i>
              <Card.Link
                href="https://www.instagram.com/bruryachmad_"
                className="p-3 text-white"
                target="_blank"
                style={{ textDecoration: "none" }}>
                bruryachmad_
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="border-0 bg-light bg-opacity-10 text-center m-auto mb-3"
            style={{ width: "18rem" }}>
            <Card.Body>
              <Image
                src={Foto2}
                alt="prof"
                className="w-100 rounded-pill shadow"
              />
              <Card.Title>Mustofa</Card.Title>
              <Card.Subtitle className="mb-2" style={{ fontWeight: "200" }}>
                119229066
              </Card.Subtitle>

              <i className="fab fa-instagram"></i>
              <Card.Link
                href="https://www.instagram.com/__mustofa__"
                className="p-3 text-white"
                target="_blank"
                style={{ textDecoration: "none" }}>
                __mustofa__
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="border-0 bg-light bg-opacity-10 text-center m-auto mb-3"
            style={{ width: "18rem" }}>
            <Card.Body>
              <Image
                src={Foto3}
                alt="prof"
                className="w-100 rounded-pill shadow"
              />
              <Card.Title>Reginald A</Card.Title>
              <Card.Subtitle className="mb-2" style={{ fontWeight: "200" }}>
                1192290
              </Card.Subtitle>

              <i className="fab fa-instagram"></i>
              <Card.Link
                href="https://www.instagram.com/reginaldalviny"
                className="p-3 text-white"
                target="_blank"
                style={{ textDecoration: "none" }}>
                reginaldalviny
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
