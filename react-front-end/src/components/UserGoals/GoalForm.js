import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import { UploadOutlined } from '@ant-design/icons';
import { Button as AntdButton, Input, Upload, DatePicker, Space } from 'antd';


const { TextArea } = Input;

const GoalForm = (props) => {

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(" Title Can't be Blank"),
    description: Yup.string().required("Description Can't be Blank"),
    image: Yup.mixed().required("Image is required"),
    start_date: Yup.date().required("Start Date Required"),
    end_date: Yup.date().required("End Date Required")
  });


  return (
    <div className="form-wrapper">

      <Formik
        validationSchema={validationSchema}


        onSubmit={(values) => {
          console.log(values)
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
                showCount maxLength={140}
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
              <Space direction="vertical" size={12}>
                <DatePicker
                  showTime
                  name="start_date"
                  placeholder="Start Date"
                  selected={(values.start_date && new Date(values.start_date)) || null}
                  onChange={(value, dateString) =>
                    setFieldValue("start_date", dateString)}
                />
              </Space>
              <ErrorMessage
                name="start_date"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Space direction="vertical" size={12}>
                <DatePicker
                  showTime
                  name="end_date"
                  placeholder="End Date"
                  selected={(values.end_date && new Date(values.start_date)) || null}
                  onChange={(value, dateString) =>
                    setFieldValue("end_date", dateString)}
                />
              </Space>
              <ErrorMessage
                name="end_date"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <br />
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