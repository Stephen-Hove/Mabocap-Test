import React from "react";
import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import PageWrapper from "../PageWrapper";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const textToType = "Committed to Superior Quality and Results";
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(textToType.slice(0, i));
      i++;
      if (i > textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
  
    if (targetSection) {
      const yOffset = -100; // Adjust this value to control how much above the target section you want to scroll
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }; 

  return (
    <>
      <PageWrapper style={{ position: "absolute" }}/>
      <Container
        style={{
          background: `url('img/image2.jpg') no-repeat center center`,
          backgroundSize: "cover",
          height: "50vh",
        }}
        fluid
        className="d-flex justify-content-center align-items-center"
        id="home"
      >
        <div style={{ padding: "2rem" }} className="blurred-background">
          <div className="blurred-text d-flex justify-content-center flex-column ">
            <h1 className="text-center">
              {text}
              <br />
            </h1>
            <Container
              className="d-flex justify-content-center mt-3"
              style={{ gap: "2rem" }}
            >
              <Button
                style={{
                  borderRadius: "0",
                  background: "none",
                  borderColor: "#d46a6a",
                  color: "#d46a6a",
                }}
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>{" "}
              <Button
                style={{
                  borderRadius: "0",
                  backgroundColor: "#d46a6a",
                  borderColor: "#d46a6a",
                  color: "#fff",
                }}
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}
