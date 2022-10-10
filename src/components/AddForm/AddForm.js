import AddFormStyles from '../../styles/Addform.module.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialFormValues = {
  year: 'asd',
  month: 'asd',
  consume: 'asd',
  price: 'asd',
  billof: 'asd',
  billoftype: 'asd',
};
function AddForm() {
  const [formData, setFormData] = useState(initialFormValues);
  // const { values, handleChange, handleSubmit, handleReset, errors, touched } =
  //   useFormik({
  //     initialFormValues,
  //     onSubmit: values => {
  //       // setFormData(values);
  //       console.log(values);
  //     },
  //   });
  const { values, handleChange, handleSubmit } = useFormik({
    initialFormValues,
    onSubmit: values => {
      setFormData(values);
      console.log(values);
    },
  });

  return (
    <div className={AddFormStyles.container}>
      <div className={AddFormStyles.form_components}>
        <form onSubmit={handleSubmit}>
          <div className={AddFormStyles.input}>
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              name="year"
              onChange={handleChange}
              value={formData.year}
            />
          </div>
          <div className={AddFormStyles.month}>
            <label htmlFor="month">Month:</label>
            <input
              type="text"
              name="month"
              onChange={handleChange}
              value={formData.month}
            />
          </div>
          <div className={AddFormStyles.consume}>
            <label htmlFor="consume">Comsume:</label>
            <input
              type="text"
              name="consume"
              onChange={handleChange}
              value={formData.consume}
            />
          </div>
          <div className={AddFormStyles.price}>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              value={formData.price}
            />
          </div>
          <div className={AddFormStyles.billof}>
            <label>Bill Of:</label>
            <select name="billof" onChange={handleChange} value={formData.billof}>
              <option value="elektrik">Elektrik</option>
              <option value="su">Su</option>
              <option value="gaz">Gaz</option>
              <option value="telekominikasyon">Telekom..</option>
            </select>
          </div>
          <div className={AddFormStyles.billoftelekomhidden}>
            <label>type of telekom..:</label>
            <select
              name="billoftype"
              onChange={handleChange}
              value={formData.billoftype}
            >
              <option value="mobile">Mobile</option>
              <option value="cable">Cable</option>
            </select>
          </div>
          <div className={AddFormStyles.billofbuttons}>
            <button type="submit">Add</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
