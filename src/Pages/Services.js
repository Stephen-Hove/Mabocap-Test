import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const services = [
  {
    name: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Service 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Service 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Service 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };
  return (
    <section className="page-section" id="services">
      <div className="section__title d-flex justify-content-center flex-column" id="services">
        <h2 className="section__description text-center">
          Services
        </h2>
        <h3 className="section__header text-center mb-5">
          Mabocap offers its clients the following services.
        </h3>
      </div>

      <Row
        className="d-flex justify-content-center mt-3 "
        style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
      >
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              backgroundSize: "cover",
              textAlign: "center",
            }}
            onClick={() => setSelectedService(services[0])}
          >
            <Card.Header
              style={{
                backgroundColor: "#b82c2c",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Building Construction
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "black",
                background: "white",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#b82c2c",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              backgroundSize: "cover",
            }}
            onClick={() => setSelectedService(services[1])}
          >
            <Card.Header
              style={{
                backgroundColor: "#b82c2c",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Front of Card
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "black",
                background: "white",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#b82c2c",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              backgroundSize: "cover",
            }}
            onClick={() => setSelectedService(services[2])}
          >
            <Card.Header
              style={{
                backgroundColor: "#b82c2c",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Plant Hire
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                textAlign: "center",
                color: "black",
                background: "white",
              }}
            >
              <p>
                <b>Roller</b>
              </p>
              <p>
                <b>Grader</b>
              </p>
              <p>
                <b>Excavator</b>
              </p>
              <p>
                <b>Tipper Truck</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#b82c2c",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              backgroundSize: "cover",
            }}
            onClick={() => setSelectedService(services[3])}
          >
            <Card.Header
              style={{
                backgroundColor: "#b82c2c",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Material and Equipment Supply
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "black",
                background: "white",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#b82c2c",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              backgroundSize: "cover",
            }}
            onClick={() => setSelectedService(services[4])}
          >
            <Card.Header
              style={{
                backgroundColor: "#b82c2c",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Civil Engineering Infrastructure
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "black",
                background: "white",
                textAlign: "center",
              }}
            >
              <p>
                <b>Industrial Plant</b>
              </p>
              <p>
                <b>Rail Infrastructure</b>
              </p>
              <p>
                <b>Water Infrastructure</b>
              </p>
              <p>
                <b>Pipe Infrastructure</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#b82c2c",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              backgroundSize: "cover",
            }}
            onClick={() => setSelectedService(services[5])}
          >
            <Card.Header
              style={{
                backgroundColor: "#b82c2c",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Building Construction
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "black",
                background: "white",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#b82c2c",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedService?.description}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
