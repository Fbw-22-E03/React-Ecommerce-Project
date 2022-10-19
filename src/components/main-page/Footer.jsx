import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const FlexContainer = styled.div`
  height: 80vh;
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  align-self: flex-end;
  margin-top: 2rem;
  border-top: solid 1px;
  margin-bottom: -5rem;
`;
function Footer() {
  return (
    <FlexContainer>
      <Wrapper>
        <Container className="footer-container d-flex-column m-3">
          <Row className="d-flex justify-content-around">
            <Col className="d-flex justify-content-evenly">
              <i className="bi bi-youtube icon-size-footer"></i>
              <i className="bi bi-twitter icon-size-footer"></i>
            </Col>
            <Col>About</Col>
            <Col>Gift cards</Col>
            <Col>Help</Col>
          </Row>
          <Row className="d-flex justify-content-around">
            <Col className="d-flex justify-content-evenly">
              <i className="bi bi-facebook icon-size-footer"></i>
              <i className="bi bi-instagram icon-size-footer"></i>
            </Col>
            <Col>Help</Col>
            <Col>Stores</Col>
            <Col>Jobs</Col>
          </Row>
        </Container>
      </Wrapper>
    </FlexContainer>
  );
}

export default Footer;
