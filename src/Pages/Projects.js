import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const scrollToTop = () => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
};

const projects = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    image: "img/p2.jpeg",
    images: ["img/p2.jpeg", "img/image3.jpg", "img/image4.jpg"],
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "In Progress",
    image: "img/p1.jpeg",
    images: ["https://via.placeholder.com/600x400"],
  },
  {
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    image: "img/p3.jpeg",
    images: ["https://via.placeholder.com/600x400"],
  },
];

export default function Projects() {
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
    <section className="page-section" id="projects">
        <Container>
          <Row className="mb-4">
            <Col>
              <div className="section__title section__title--testimonials text-center">
                <h2 className="section__description" id="projects">
                  Projects
                </h2>
                <h3 className="section__header">
                  Below is a list of the current and completed projects.
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            {projects.map((project) => (
              <Col xs={12} md={6} lg={4} key={project.name}>
                <Card className="mb-4" onClick={() => handleCardClick(project)}>
                  <Card.Img variant="top" src={project.image} alt={project.name} />
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
      
            <a
              href="/gallery" // Replace with the actual URL
              className="d-flex justify-content-end"
              style={{ textDecoration: "none", color: "#d46a6a" }}
              onClick={scrollToTop}
            >
              <b>View all</b>{" "}
              <span>
                {/* Assuming you have the FontAwesome icon set up correctly */}
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </span>
            </a>
      
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
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
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
      </section>
    
  );
}
