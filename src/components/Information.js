import React from "react";
import { Button, Form } from "react-bootstrap";

function Information({ formData, maleChecked, femaleChecked, handleInput,setShowJob,handleNext }) {
  return (
    <>
      <h3 className="ms-5 mt-3">Personal Information</h3>
      <Form className="col-lg-8 ms-5 mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Name"
            className="form"
            required
            name="name"
            value={formData.name}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            className="form"
            required
            name="email"
            value={formData.email}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
          <Form.Control
            type="number"
            placeholder="Mobile"
            className="form"
            required
            name="phone"
            value={formData.phone}
            onChange={handleInput}
            onWheel={(e) => e.target.blur()}
            onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
            onKeyDown={(e) => {
              if ([32, 38, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
              }
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "-" ||
                e.key === "+" ||
                e.key === "."
              ) {
                e.preventDefault();
              }
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Select Gender</Form.Label>
          <div className="d-flex ">
            <Form.Check
              type="checkbox"
              label="Male"
              className="check me-2"
              name="gender"
              value={"male"}
              onChange={handleInput}
              checked={maleChecked}
            />
            <Form.Check
              type="checkbox"
              label="Female"
              className="check"
              name="gender"
              value={"female"}
              onChange={handleInput}
              checked={femaleChecked}
            />
          </div>
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          className="col-lg-5 btn-height"
          disabled={
            (formData.gender === "" ||
            formData.name === "" ||
            formData.phone === "" ||
            formData.email === "")?true:false
          }
          onClick={(e)=>{handleNext()
            e.preventDefault();
          }}
        >
          Next
        </Button>
      </Form>
    </>
  );
}

export default Information;
