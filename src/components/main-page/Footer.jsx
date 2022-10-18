import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 3vh;
  min-height: 100px;
  min-width: 800px;
  width: 100vw;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  border-top: solid 1px;
  margin-top: 5rem;
`;
function Footer() {
  return (
    <Wrapper>
      <Container className="footer-container d-flex-column m-3">
        <Row className="d-flex justify-content-around">
          <Col className="d-flex justify-content-evenly">
            <i class="bi bi-youtube icon-size-footer"></i>
            <i class="bi bi-twitter icon-size-footer"></i>
          </Col>
          <Col>About</Col>
          <Col>Gift cards</Col>
          <Col>Help</Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col className="d-flex justify-content-evenly">
            <i class="bi bi-facebook icon-size-footer"></i>
            <i class="bi bi-instagram icon-size-footer"></i>
          </Col>
          <Col>Help</Col>
          <Col>Stores</Col>
          <Col>Jobs</Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Footer;
