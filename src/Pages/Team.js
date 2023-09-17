import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Team() {
  return (
    <Container>
      <div className="section__title text-center mt-5">
        <h2 className="section__description">Meet The Management Team</h2>
        <h3 className="section__header">
          Meet the people responsible for the successful completion of your
          projects.
        </h3>
      </div>

      <Row>
        <Col>
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <img
              className="mx-auto rounded-circle"
              src="img/sizwe1.jpeg"
              alt="..."
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h4 style={{ color: "#d46a6a" }}>Sizwe Mkhabela</h4>
            <p className="text-muted1">Managing Director</p>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/in/sizwe-mkhabela-90240520a/"
              target="_blank"
              rel="noreferrer"
              aria-label="Sizwe Mkhabela LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Col>
        <Col>
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <img
              className="mx-auto rounded-circle"
              src="img/ndumi1.jpg"
              alt="..."
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h4 style={{ color: "#d46a6a" }}>Nondumiso Msweli</h4>
            <p className="text-muted1">Chief Operations Officer</p>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"x
              rel="noreferrer"
              aria-label="Nondumiso Msweli LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Col>
        <Col>
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <img
              className="mx-auto rounded-circle"
              src="img/simba.jpeg"
              alt="..."
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h4 style={{ color: "#d46a6a" }}>Greatman Hove</h4>
            <p className="text-muted1">Contracts Manager</p>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/in/greatman-hove-289185a7/"
              target="_blank"
              rel="noreferrer"
              aria-label="Greatman Hove LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
