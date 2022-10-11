import AddFormStyles from '../../styles/Addform.module.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialFormValues = {
  year: '2021',
  month: 'ocak',
  consume: '',
  price: '',
  billof: 'none',
  billoftype: 'none',
};
function AddForm() {
  const [formData, setFormData] = useState(initialFormValues);

  const { values, handleChange, handleReset, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialFormValues,
      onSubmit: values => {
        setFormData(values);
        console.log(values);
        handleReset();
      },
      validationSchema: Yup.object({
        year: Yup.string().label('Year').required(),
        month: Yup.string().label('Month').required(),
        consume: Yup.number().label('Consume').required(),
        price: Yup.number().label('price').required(),
        billof: Yup.string().label('Bill').optional(),
        billoftype: Yup.string().label('Bill of type').required(),
      }),
    });

  return (
    <div className={AddFormStyles.container}>
      <div className={AddFormStyles.form_components}>
        <form onSubmit={handleSubmit}>
          <div className={AddFormStyles.input}>
            <label htmlFor="year">Year:</label>
            <select
              type="text"
              name="year"
              onChange={handleChange}
              value={values.year}
            >
              <option value="2020">2020</option>
              <option value="2020">2021</option>
              <option value="2020">2022</option>
            </select>
          </div>
          <div className={AddFormStyles.month}>
            <label htmlFor="month">Month:</label>
            <select
              type="text"
              name="month"
              onChange={handleChange}
              value={values.month}
            >
              <option value="ocak">ocak</option>
              <option value="subat">subat</option>
              <option value="mart">mart</option>
              <option value="nisan">nisan</option>
              <option value="mayis">mayis</option>
              <option value="haziran">haziran</option>
              <option value="temmuz">temmuz</option>
              <option value="agustos">agustos</option>
              <option value="eylul">eylul</option>
              <option value="ekim">ekim</option>
              <option value="kasim">kasim</option>
              <option value="aralik">aralik</option>
            </select>
          </div>
          <div className={AddFormStyles.billof}>
            <label>Bill Of:</label>
            <select name="billof" onChange={handleChange} value={values.billof}>
              <option value="none">Seçiniz</option>
              <option value="elektrik">Elektrik</option>
              <option value="su">Su</option>
              <option value="gaz">Gaz</option>
              <option value="telekominikasyon">Telekom..</option>
            </select>
          </div>
          <div
            className={
              values.billof === 'telekominikasyon'
                ? AddFormStyles.billoftelekom
                : AddFormStyles.billoftelekomhidden
            }
          >
            <label>Type of telekom..:</label>
            <select
              name="billoftype"
              onChange={handleChange}
              value={values.billoftype}
            >
              <option value="none">Seçiniz</option>
              <option value="mobile">Mobile</option>
              <option value="cable">Cable</option>
            </select>
          </div>
          <div className={AddFormStyles.consume}>
            <label htmlFor="consume">Comsume:</label>
            <input
              type="text"
              name="consume"
              onChange={handleChange}
              value={values.consume}
            />
          </div>
          <div className={AddFormStyles.price}>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              value={values.price}
            />
          </div>

          <div className={AddFormStyles.error}>
          {/* {JSON.stringify(errors)} */}
          {for (const key in errors){
            <span>{errors.key}</span>
          }}
           {/* {touched.year && errors.year && <span>{errors.year}</span>}
            {touched.month && errors.month && <span>{errors.month}</span>}
            {touched.consume && errors.consume && <span>{errors.consume}</span>}
            {touched.price && errors.price && <span>{errors.price}</span>}
            {touched.billof && errors.billof && <span>{errors.billof}</span>}
            {touched.billoftype && errors.billoftype && (
              <span>{errors.billoftype}</span>
            )} */}
           
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
