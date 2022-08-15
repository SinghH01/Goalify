import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button as AntdButton, message, Upload } from 'antd';
const { TextArea } = Input;

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];


const GoalForm = (props) => {

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(" Title Can't be Balnk"),
    description: Yup.string().required("Description Can't be Balnk"),
    image: Yup.mixed().required("Image is required"),
    start_date: Yup.date().required("Start Date Required"),
    end_date: Yup.date().required("End Date Required")
  });


  return (
    <div className="form-wrapper">

      <Formik
        validationSchema={validationSchema}


        onSubmit={(values) => {
          console.log(values.image)
          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }
          props.onSubmit(formData);
        }}
        initialValues={
          { ...props.initialValues }
        }

      >

        {({ handleChange, values, setFieldValue }) => (

          <Form>
            <FormGroup>
              <Input
                showCount maxLength={20}
                name="title"
                type="text"
                placeholder="Title"
                value={values.title}
                onChange={handleChange} />
              <ErrorMessage
                name="title"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <br />
            <FormGroup>
              <TextArea
                showCount maxLength={100}
                name="description"
                placeholder="Description"
                value={values.description}
                onChange={handleChange} />
              <ErrorMessage
                name="description"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Upload name='file'
                listType="picture"
                className="upload-list-inline"
                defaultFileList={values.image}
                onChange={(e) =>
                  setFieldValue('image', e.file.originFileObj)}
              >
                <AntdButton icon={<UploadOutlined />}>Upload Image</AntdButton>
              </Upload>
              <ErrorMessage
                name="image"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <br />
            <FormGroup>
              <label>Start Date</label>
              <Field name="start_date" type="date"
                className="form-control"
                onChange={handleChange}
                value={values.start_date}
              />
              <ErrorMessage
                name="start_date"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <label>End Date</label>
              <Field name="end_date" type="date"
                onChange={handleChange}
                value={values.end_date}
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
        )}
      </Formik>
    </div>
  );
};

export default GoalForm;