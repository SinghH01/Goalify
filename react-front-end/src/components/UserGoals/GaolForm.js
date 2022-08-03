import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
  
const GaolForm = (props) => {

  

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    start_date: Yup.date().required("Required"),
    end_date: Yup.date().required("Required")
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="title" type="text" 
                className="form-control" />
            <ErrorMessage
              name="title"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="description" type="text" 
                className="form-control" />
            <ErrorMessage
              name="description"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="image" type="test" 
                className="form-control" />
            <ErrorMessage
              name="image"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="start_date" type="date" 
                className="form-control" />
            <ErrorMessage
              name="start_date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="end_date" type="date" 
                className="form-control" />
            <ErrorMessage
              name="end_date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default GaolForm;