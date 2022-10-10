import AddBillStyles from '../../styles/AddBill.module.css';
import AddForm from '../AddForm'

function AddBill() {
  return (
    <div className={AddBillStyles.container}>
      <div>Add New Bill</div>
      <AddForm/>
      {/* <ShowGraph/> */}
    </div>
  );
}

export default AddBill;
