import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Col, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      name,
      email,
      message: `${message}\n\n${email}`,
    };
    emailjs

      .send(
        "service_j21k8ta",
        "template_ek79hdx",
        templateParams,
        "ak5pf60tfN57BR_Za"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email: " + error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="page-section" id="contact">
      <div className="section__title text-center mt-4">
        <h2 className="section__description">CONTACT US</h2>
        <h3 className="section__header">
          Drop us a message. We would love to hear from you!
        </h3>
      </div>
      <>
        <Row className=" d-flex align-items-center justify-content-center">
          <Col
            md={6}
            xs={12}
            className="d-flex justify-content-start align-items-center"
          >
            <div
              style={{
                color: "white",
                background: `url('img/image2.jpg') no-repeat center center fixed`,
                backgroundSize: "cover",
              }}
            >
              <div
                className="contact-thumb"
                style={{ background: "rgba(39,62,84,0.7)" }}
              >
                <div
                  className="wow fadeInUp contact-info"
                  data-wow-delay="0.6s"
                >
                  <h3 className="color-white">Visit our office</h3>
                  <p>
                    1810 Pangolin Street, Kamagugu, Nelspruit, Mpumalanga, 1200
                  </p>
                </div>

                <div
                  className="wow fadeInUp contact-info"
                  data-wow-delay="0.8s"
                >
                  <h3>Contact.</h3>
                  <p>
                    <i className="fa fa-phone"></i> 073 519 6961
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>
                    info@mabocap.co.za
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="contact-form">
              <div
                className="wow fadeInUp section-title"
                data-wow-delay="0.2s"
                style={{ color: "white" }}
              >
                <h1 className="color-white">Say hello..</h1>
                <p className="color-white">
                  Leave a message and we will get back to you soon.
                </p>
              </div>

              <div id="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="wow fadeInUp" data-wow-delay="1s">
                    <input
                      name="fullname"
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Your Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="1.2s">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="1.4s">
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control"
                      id="message"
                      placeholder="Write your message..."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <div
                    className="wow fadeInUp col-md-6 col-sm-8"
                    data-wow-delay="1.6s"
                  >
                    <input
                      name="submit"
                      type="submit"
                      className="form-control"
                      id="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <Col>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4561231451694!2d30.998643515014717!3d-25.456440583776324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee849e29de8be87%3A0x5507d2df24c94eb6!2sPangolin%20St%2C%20Kamagugu%2C%20Mbombela%2C%201200!5e0!3m2!1sen!2sza!4v1644406002152!5m2!1sen!2sza"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Col>
      </>
    </section>
  );
}
