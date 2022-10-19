function Footer() {
  return (
    <FlexContainer>
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
    </FlexContainer>
  );