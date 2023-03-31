import React from "react";
import { Button, Form, Row, Spinner } from "react-bootstrap";

function JobPosition({ setShowJob, handleJobInput, termsChecked, jobData ,handleSubmit,isLoading}) {
  return (
    <>
      <Row>
        <Form.Text className="ms-5 mt-5 fs-5">
          <i
            className="bi bi-arrow-left hand-icon"
            onClick={() => {
              setShowJob(false);
            }}
          ></i>
          Previous Step
        </Form.Text>
      </Row>

      <h3 className="ms-5 mt-3">Personal Information</h3>
      <Row className="col-lg-10 ms-5 ">
        <hr></hr>
      </Row>

      <Form className="col-lg-8 ms-5 mt-3">
        <Form.Group className="mb-3" style={{visibility:"hidden"}}>
          <Form.Check
            enabled
            type={"radio"}
            id={`default`}
            label={`Frontend Developer`}
            name="job_title"
            value={"Frontend Developer"}
            onChange={handleJobInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" style={{visibility:"hidden"}}>
          <Form.Check
            type={"radio"}
            id={`default-radio1`}
            label={`WordPress Developer`}
            name="job_title"
            value={"WordPress Developer"}
            onChange={handleJobInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" style={{visibility:"hidden"}}>
          <Form.Check
            type={"radio"}
            id={`default-radio1`}
            label={`WordPress Developer`}
            name="job_title"
            value={"WordPress Developer"}
            onChange={handleJobInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            enabled
            type={"radio"}
            id={`default`}
            label={`Frontend Developer`}
            name="job_title"
            value={"Frontend Developer"}
            onChange={handleJobInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4">
          <Form.Check
            enabled
            type={"radio"}
            id={`default-radio1`}
            label={`WordPress Developer`}
            name="job_title"
            value={"WordPress Developer"}
            onChange={handleJobInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4">
          <Form.Check
            type={"radio"}
            // id={`default-radio`}
            label={`UI/UX Designer`}
            name="job_title"
            value={"UI/UX Designer"}
            onChange={handleJobInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4">
          <Form.Check
            type={"radio"}
            // id={`default-radio`}
            label={`Support Engineer`}
            name="job_title"
            value={"Support Engineer"}
            onChange={handleJobInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4">
          <Form.Check
            type={"radio"}
            // id={`default-radio`}
            label={`Graphic Designer`}
            name="job_title"
            value={"Graphic Designer"}
            onChange={handleJobInput}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-5" controlId="formBasicCheckbox">
          <div className="d-flex ">
            <Form.Check
              type="checkbox"
              label="  "
              className=""
              name="terms"
              onChange={handleJobInput}
              checked={termsChecked}
            />
            <p>
              I accept the{" "}
              <span className="text-success">Term of Conditions</span> and{" "}
              <span className="text-success">Privacy Policy</span>
            </p>
          </div>
        </Form.Group>
        <div className="d-flex">
        <Button
          variant="success"
          type="submit"
          className="col-lg-5 btn-height"
          disabled={
            (jobData.job_title === "" ||
            !termsChecked)
          
          }
          onClick={(e)=>{handleSubmit()
            e.preventDefault();
          }}
        >
          Submit
        </Button>
        {isLoading&&<Spinner animation="border" />}
        </div>
        
      </Form>
    </>
  );
}

export default JobPosition;
