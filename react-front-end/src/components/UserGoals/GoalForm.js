import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";


const GoalForm = (props) => {

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(" Title Can't be Balnk"),
    description: Yup.string().required("Description Can't be Balnk"),
    // image: Yup.string().required("Required"),
    start_date: Yup.date().required("Start Date Required"),
    end_date: Yup.date().required("End Date Required")
  });

  return (
    <div className="form-wrapper">
      
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
              <label htmlFor="title">Title</label>
              <Field name="title" className="form-control" type="text" />
           
            <ErrorMessage
              name="title"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description</label>
            <Field name="description" className="form-control" as="textarea" rows={3} cols={10} />
            <ErrorMessage
              name="description"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label>Image</label>
            <Field name="image" type="test"
              className="form-control" />
            <ErrorMessage
              name="image"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label>Start Date</label>
            <Field name="start_date" type="date"
              className="form-control" />
            <ErrorMessage
              name="start_date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label>End Date</label>
            <Field name="end_date" type="date"
              className="form-control" />
            <ErrorMessage
              name="end_date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default GoalForm;