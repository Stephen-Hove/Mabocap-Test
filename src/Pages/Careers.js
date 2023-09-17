import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "./CareersFooter";
import PageNav from "../PageNavs";

export default function Careers() {
  return (
    <>
      <PageNav />
      <Container>
        <div className="section__title text-center mt-5">
          <h2 className="section__description">MABOCAP CAREERS</h2>
          <h3 className="section__header">
            Your next destination might be with us.
          </h3>
        </div>

        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col md={8}>
                <h4>
                  {" "}
                  <b>Junior Civil Engineer</b>
                </h4>

                <h5>Responsibilities</h5>

                <ul>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                </ul>
              </Col>
              <Col md={4} className="mt-5">
                <div>
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
                  <span>1810 Pangolin Street, Kamagugu, Nelspruit </span>
                </div>
                <br />
                <div>
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-file-signature" />
                  <span>Full Time </span>
                </div>
                <br />
                <div>
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-calendar-days" />{" "}
                  <span>12 March 2023 </span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mt-5">
          <Card.Body>
            <Row>
              <Col md={8}>
                <h4>
                  {" "}
                  <b>Project Manager</b>
                </h4>

                <h5>Responsibilities</h5>

                <ul>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </li>
                </ul>
              </Col>
              <Col md={4} className="mt-5 mb-5">
                <div>
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
                  <span>1810 Pangolin Street, Kamagugu, Nelspruit </span>
                </div>
                <br />
                <div>
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-file-signature" />
                  <span>12 months contract </span>
                </div>
                <br />
                <div>
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-calendar-days" />{" "}
                  <span>12 March 2023 </span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <div className="mt-5">
        {" "}
        <Footer />
      </div>
    </>
  );
}
