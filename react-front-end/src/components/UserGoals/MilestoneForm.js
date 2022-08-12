import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";


const MilestoneForm = (props) => {

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(" Title Can't be Balnk"),
    description: Yup.string().required("Description Can't be Balnk"),
    // image: Yup.string().required("Required"),
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
          <label>End Date</label>
            <Field name="end_date" type="date"
              className="form-control" />
            <ErrorMessage
              name="end_date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <div className="form-submit">
              <Button variant="outline-success" block="block" type="submit">
                {props.children}
              </Button>{' '}
            </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MilestoneForm;