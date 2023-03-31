import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import img from "../Images/big-green-check.png"
function SuccessPage() {
  return (
    <>
      <Row className="col-lg-12">
        <Col className="d-flex flex-column  full-height justify-content-center align-items-center">
            <div>
          <img
            src={img}
            alt=""
            className="image-success"
          />
          </div>

          <h1>Application Submitted</h1>
          <Form.Text className="fs-4">Thanks for your interest</Form.Text>
          <Form.Text className="fs-4">Our Team will review your application and call you for interview</Form.Text>

        </Col>
      </Row>
    </>
  );
}

export default SuccessPage;
