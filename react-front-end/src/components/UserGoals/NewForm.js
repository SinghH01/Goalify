import React from 'react';
import { useFormik } from 'formik';
import { propTypes } from 'react-bootstrap/esm/Image';

const NewForm = (props) => {
  const formik = useFormik({
    initialValues: {
      ...props.initialValues
    },
    onSubmit: (values)=>{

      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }

      props.onSubmit(formData)
      console.log(formData);

    
    
    
    }
    
  });
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div>
          <label> Title</label>
          <input type='text' 
          name='title' 
          onChange={formik.handleChange}
          value={formik.values.title}
          />
        </div>
        <div>
          <label> Description</label>
          <input 
           type='text'
           name='description' 
           onChange={formik.handleChange}
          value={formik.values.description}
           />
        </div>
        <div>
          <label> Upload File</label>
          <input
            type='file'
            name='image'
            accept='image/*'
            onChange={(e) =>
              formik.setFieldValue('image', e.currentTarget.files[0])
            }
          />
        </div>
        <div>
          <label> Start Date</label>
          <input 
          type='date'
           name='start_date' 
           onChange={formik.handleChange}
          value={formik.values.start_date}
           />
        </div>
        <div>
          <label> End Date</label>
          <input
           type='date'
           name='end_date'
           onChange={formik.handleChange}
          value={formik.values.end_date}
           />
        </div>
  
        <button type='submit'>Submit</button>
      </form>
    );
};

export default NewForm