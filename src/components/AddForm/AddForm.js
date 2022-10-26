import AddFormStyles from '../../styles/Addform.module.css';
import React, {  useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import GlobalContext from '../../Context/globalContext';

function AddForm() {
  const { componentName } = useContext(GlobalContext);

  const initialFormValues = {
    year: '2020',
    month: '1',
    consume: '',
    price: '',
    billof: componentName === 'main' ? 'none' : componentName,
    billoftype: 'none',
  };

  const handlePostData = async formValues => {
    console.log(formValues);
    const response = await axios.post('/add_new_bill', formValues);
    const data = await response.data;
    console.log(data);
  };

  const { values, handleChange, handleReset, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialFormValues,
      onSubmit: values => {
        // setFormData(values);
        handlePostData(values);
        handleReset();
      },
      validationSchema: Yup.object({
        year: Yup.string().label('Year').required(),
        month: Yup.string().label('Month').required(),
        consume: Yup.string().label('Consume').required(),
        price: Yup.string().label('Price').required(),
        billof: Yup.string().label('Bill').required(),
        billoftype: Yup.string().label('Bill of type').optional(),
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
              <option value="2021">2021</option>
              <option value="2022">2022</option>
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
              <option value="1">ocak</option>
              <option value="2">subat</option>
              <option value="3">mart</option>
              <option value="4">nisan</option>
              <option value="5">mayis</option>
              <option value="6">haziran</option>
              <option value="7">temmuz</option>
              <option value="8">agustos</option>
              <option value="9">eylul</option>
              <option value="10">ekim</option>
              <option value="11">kasim</option>
              <option value="12">aralik</option>
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
            {/* {for (const key in errors){
            <span>{errors.key}</span>
          }} */}
            {touched.year && errors.year && <span>{errors.year}</span>}
            {touched.month && errors.month && <span>{errors.month}</span>}
            {touched.consume && errors.consume && <span>{errors.consume}</span>}
            {touched.price && errors.price && <span>{errors.price}</span>}
            {touched.billof && errors.billof && <span>{errors.billof}</span>}
            {touched.billoftype && errors.billoftype && (
              <span>{errors.billoftype}</span>
            )}
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
