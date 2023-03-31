import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../css/main.css";
import { useFirstPage } from "../hook/useFirstPage";
import Information from "./Information";
import JobPosition from "./JobPosition";
import SuccessPage from "./SuccessPage";

function FirstPage() {
  const {
    formData,
    maleChecked,
    femaleChecked,
    handleInput,
    showJob,
    setShowJob,
    handleJobInput,
    termsChecked,
    jobData,
    handleNext,
    isLoading,
    showSuccess,
    handleSubmit
  } = useFirstPage();
  return (
    <>
      <Row className="col-lg-12">
        {showSuccess ? (
          <Col className="col-lg-12">
            <SuccessPage />
          </Col>
        ) : (
          <>
            <Col className="col-lg-7 b-ground position-relative">
              <Row className="col-lg-12 mt-5 mx-5">
                <Col className="col-lg-12 mt-5 mx-5">
                  <h1 className="text-white mt-5">Let's Join with us !</h1>
                </Col>
                <Col className="col-lg-12 mt-2 mx-5">
                  <h5 className="text-white mt-5">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </h5>
                </Col>
              </Row>
              <Row className="col-lg-12 bottom-3   position-absolute bottom-0 mb-3 ">
                <div className="d-flex justify-content-between ms-3 me-3">
                  <h6 className="text-white">
                    Copyright © 2022 Octilus Technologies
                  </h6>
                  <h6 className="text-white me-3">
                    <i className="bi bi-facebook me-3"></i>
                    <i className="bi bi-twitter me-3"></i>
                    <i className="bi bi-linkedin me-3"></i>
                    <i className="bi bi-instagram me-3"></i>
                  </h6>
                </div>
              </Row>
            </Col>
            <Col className="col-lg-5">
              {!showJob && (
                <Information
                  formData={formData}
                  maleChecked={maleChecked}
                  femaleChecked={femaleChecked}
                  handleInput={handleInput}
                  setShowJob={setShowJob}
                  handleNext={handleNext}
                />
              )}
              {showJob && (
                <JobPosition
                  setShowJob={setShowJob}
                  handleJobInput={handleJobInput}
                  termsChecked={termsChecked}
                  jobData={jobData}
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                />
              )}
            </Col>
          </>
        )}
      </Row>
    </>
  );
}

export default FirstPage;
