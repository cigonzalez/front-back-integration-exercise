import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

export const CreateOffer = (props) => {
  const schema = Yup.object({
    name: Yup.string().required(),
    company: Yup.string().required(),
    salary: Yup.string().required(),
    city: Yup.string().required(),
  });
  const [inputs, setInputs] = useState({});

  const handleSubmit = (values) => {
    setInputs({
      name: values.name,
      company: values.company,
      salary: values.salary,
      city: values.city,
    });
    console.log(inputs);

    axios
      .post("/offers", {
        name: values.name,
        company: values.company,
        salary: values.salary,
        city: values.city,
      })
      .then((res) => {
        console.log(res);
        props.action();
      });
  };

  return (
    <Container>
      <h1>Add a new offer</h1>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          company: "",
          salary: "",
          city: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                required
                type="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                isInvalid={!!errors.company}
              />
              <Form.Control.Feedback type="invalid">
                {errors.company}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                required
                type="salary"
                name="salary"
                value={values.salary}
                onChange={handleChange}
                isInvalid={!!errors.salary}
              />
              <Form.Control.Feedback type="invalid">
                {errors.salary}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
