import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


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

      <Formik
        validationSchema={validationSchema}


        onSubmit={(values) => {

          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }

          props.onSubmit(formData)
          console.log(formData);

        }}
        initialValues={
          { ...props.initialValues }
        }

      >

        {({ handleChange, values, setFieldValue }) => (
          <Form>
            <FormGroup>
              <label htmlFor="title">Title</label>
              <Field name="title" className="form-control" type="text"
                onChange={handleChange}
                value={values.title}
              />

              <ErrorMessage
                name="title"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="description">Description</label>
              <Field name="description" className="form-control" as="textarea" rows={3} cols={10}
                onChange={handleChange}
                value={values.description} />
              <ErrorMessage
                name="description"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>

            <FormGroup>
              <div class="custom-file">
                <input id="inputGroupFile01" type="file" class="custom-file-input"
                  name='image'
                  accept='image/*'
                  onChange={(e) =>
                    setFieldValue('image', e.currentTarget.files[0])
                  } />
              </div>

            </FormGroup>
            <FormGroup>
              <label>Start Date</label>
              <Field name="start_date" type="date"
                className="form-control" />
              <ErrorMessage
                name="start_date"
                className="d-block invalid-feedback"
                onChange={handleChange}
                value={values.start_date}
              />
            </FormGroup>
            <FormGroup>
              <label>End Date</label>
              <Field name="end_date" type="date"
                className="form-control" />
              <ErrorMessage
                name="end_date"
                className="d-block invalid-feedback"
                onChange={handleChange}
                value={values.end_date}
              />
            </FormGroup>
            <Button variant="outline-success" block="block" type="submit">
              {props.children}
            </Button>{' '}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GoalForm;