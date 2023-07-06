import { Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">404</h1>
          <h1 className="text-center">Page not found</h1>
        </Col>
      </Row>
    </Container>
  );
}