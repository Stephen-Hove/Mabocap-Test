import React, { useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import projects from "../data";
import Footer from "./Footer";
import PageNav from "../PageNavs";

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCarouselSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  return ( 
    <div>
      <PageNav />
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <div className="section__title text-center">
              <h2 className="section__description">MABOCAP GALLERY</h2>
              <h3 className="section__header">
                Take a look at what we have been up to.
              </h3>
            </div>
          </Col>
        </Row>

        <Row>
          {projects.map((project) => (
            <Col xs={12} md={6} lg={4} key={project.name}>
              <Card className="mb-4" onClick={() => handleCardClick(project)}>
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.name}
                />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>Status: {project.status}</Card.Text>
                  <Button
                    style={{
                      borderRadius: "0",
                      backgroundColor: "#d46a6a",
                      borderColor: "#d46a6a",
                      color: "#fff",
                    }}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>
              {" "}
              <b>Project: </b> Lorem Ipsum
            </h6>{" "}
            <h6>
              {" "}
              <b>Start Date: </b> 13 March 2018
            </h6>
            <h6>
              {" "}
              <b>Completion Date: </b> 13 March 2018
            </h6>{" "}
            <br></br>
            <h6>
              {" "}
              <b>Nature of project: </b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </h6>
            <Carousel
              activeIndex={carouselIndex}
              onSelect={handleCarouselSelect}
              style={{ marginTop: "-10rem" }}
            >
              {selectedProject?.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image src={image} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Footer />
    </div>
  );
}
