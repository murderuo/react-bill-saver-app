import AddFormStyles from '../../styles/Addform.module.css';

function AddForm() {
  return (
    <div className={AddFormStyles.container}>
      <div className={AddFormStyles.form_components}>
        <form>
          <div className={AddFormStyles.input}>
            <label htmlFor="year">Year:</label>
            <input type="text" name="year" />
          </div>
          <div className={AddFormStyles.month}>
            <label htmlFor="month">Month:</label>
            <input type="text" name="month" />
          </div>
          <div className="consume">
            <label htmlFor="consume">Comsume:</label>
            <input type="text" name="consume" />
          </div>
          <div className="price">
            <label htmlFor="price">Price:</label>
            <input type="text" name="price" />
          </div>
          <div className="billof">
            <label htmlFor="price">Bill Of:</label>
            <select name="" id="">
              <option value="mocile">Mobile</option>
              <option value="cable">Cable</option>
            </select>
          </div>
          <div className="billof">
            <button type="submit">Add</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
