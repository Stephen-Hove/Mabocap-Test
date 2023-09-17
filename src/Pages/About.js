import React from "react";

export default function About() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="section__title text-center">
          <h2 className="section__description">About Us</h2>
          <h4 className="section__header">
            Everything you need to know about Mabocap and more.
          </h4>
        </div>
        <ul className="timeline">
          <li>
            <div
              className="timeline-image"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                className="rounded-circle img-fluid"
                src="img/s2.jpeg
                "
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>The Origins </h4>
                <h6 style={{ color: "#d46a6a", fontSize: "1.2rem" }}>
                  January 2018
                </h6>
              </div>
              <div className="timeline-body">
                <p className="text-muted1 ">
                  After years of working in Consulting and Construction space,
                  and amassing a great wealth of knowledge, our Managing
                  Director decided that his best work was ahead of him in the
                  construction industry as a contractor and specialist project
                  manager. He decided to put together a team of dedicated
                  individuals to take on the construction space, using their
                  vast knowledge acquired through completing projects for
                  private entities, SANRAL, Rand Water, Provincial governments,
                  and municipalities. The journey started with subcontract work
                  from a big reputable construction company, taking on many
                  community transforming projects, and bringing sustainable
                  development to African communities.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div
              className="timeline-image"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                className="rounded-circle img-fluid d-flex align-items-center"
                src="img/v1.jpeg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Vision</h4>
                <h6 style={{ color: "#d46a6a", fontSize: "1.2rem" }}>
                  The future we belive in
                </h6>
              </div>
              <div className="timeline-body">
                <p className="text-muted1">
                  To be the leading construction company in the continent. To be
                  the preferred company for developmental projects and one of
                  the drivers for sustainable development in Africa. To provide
                  the highest level of service in the construction industry,
                  building a stellar team and offering superior workmanship to
                  every project we take on.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div
              className="timeline-image"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                className="rounded-circle img-fluid"
                src="img/h1.jpeg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Mission</h4>
                <h6 style={{ color: "#d46a6a", fontSize: "1.2rem" }}>
                  Why we exist
                </h6>
              </div>
              <div className="timeline-body">
                <p>
                  To deliver projects timeously and cost effectively whilst
                  providing the best quality to our clients. Realization of our
                  clients’ dreams through sustainably developed projects and
                  contributing to Africa’s development. Using our dedicated
                  team, who are willing to go the extra mile for each client on
                  each project.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div
              className="timeline-image"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                className="rounded-circle img-fluid"
                src="img/vl1.jpeg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Values</h4>
                <h6 style={{ color: "#d46a6a", fontSize: "1.2rem" }}>
                  What defines us
                </h6>
              </div>
              <div className="timeline-body">
                <div className="text-muted1">
                  <ul>
                    <li>
                      Quality and attention to detail – we constantly focus on
                      superior production.
                    </li>
                    <li>
                      Committed to success – we endeavour to exceed client
                      expectations.
                    </li>
                    <li>
                      Teamwork – we have positive attitudes, and we follow
                      company standards.
                    </li>
                    <li>Accountable and responsible – we achieve results.</li>
                    <li>
                      Continuous improvement – we are committed to achieving
                      excellence.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div
              className="timeline-image"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
