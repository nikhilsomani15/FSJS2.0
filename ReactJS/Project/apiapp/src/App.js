import React, { useState, useEffect } from "react";
import { Container, Row, Column, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axiox from "axios";
import { Cards } from "./Cards";
function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axiox.get("https://randomuser.me/api/");
    const detailss = data.results[0];
    setDetails(detailss);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <Cards details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
