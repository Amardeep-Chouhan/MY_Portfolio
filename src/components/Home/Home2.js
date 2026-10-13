import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <section className="section section-alt" aria-labelledby="intro-title">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={8}>
            <h2 id="intro-title" className="section-title starlight-text">
              A little about me
            </h2>
            <p>
              I'm a full-stack developer from Bhopal who enjoys turning ideas
              into reliable products. I mostly build with{" "}
              <strong className="purple">Node.js</strong> and modern frameworks
              like <strong className="purple">React</strong> and{" "}
              <strong className="purple">Next.js</strong>.
            </p>
            <p>
              Through internships at{" "}
              <strong>Django Softwares Pvt. Ltd.</strong> and{" "}
              <strong>Crystaltech Services Pvt. Ltd.</strong> I worked on
              backend development, API integration, database management,
              authentication, debugging and testing, and learned how to write
              clean code and collaborate with a development team.
            </p>
            <p>
              I'm most interested in web applications and real-world products
              with intuitive user experiences.
            </p>
          </Col>
          <Col md={4} className="avatar-col">
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
              <img src={myImg} className="img-fluid" alt="" width="320" height="320" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home2;
