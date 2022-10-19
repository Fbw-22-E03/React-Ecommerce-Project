import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const FlexContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-content: baseline;
  // margin-top: auto;
  // border: solid 2px;
  // min-height: 60vh;
`;
const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: red;
  min-height: cal(100vh-60px);
  position: fixed;
  bottom: 0;
  // margin-top: 100%;
`;
// const Wrapper = styled.div`
//   // width: 100%;
//   // background: rgba(255, 255, 255, 0.8);
//   // align-self: flex-end;
//   // border-top: solid 1px;
//   // margin-bottom: -5rem;
//   // border: solid blue;
//   position: relative;
//   bottom: 0;
// `;

function Footer() {
  return (
    <FlexContainer className="footer">
      {/* <Row className="d-flex justify-content-around"> */}
      <Row className="d-flex">
        <Col className="d-flex justify-content-evenly">
          <i className="bi bi-youtube icon-size-footer"></i>
          <i className="bi bi-twitter icon-size-footer"></i>
        </Col>
        <Col>About</Col>
        <Col>Gift cards</Col>
        <Col>Help</Col>
      </Row>
      <Row className="d-flex">
        <Col className="d-flex justify-content-evenly">
          <i className="bi bi-facebook icon-size-footer"></i>
          <i className="bi bi-instagram icon-size-footer"></i>
        </Col>
        <Col>Help</Col>
        <Col>Stores</Col>
        <Col>Jobs</Col>
      </Row>
      {/* </Row> */}
    </FlexContainer>
  );
}

export default Footer;
