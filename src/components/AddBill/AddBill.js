import AddBillStyles from '../../styles/AddBill.module.css';
import AddForm from '../AddForm'
import {useContext, useEffect} from 'react'
import GlobalContext from '../../Context/globalContext';

function AddBill() {

  const {  setComponentName } = useContext(GlobalContext);

  
  
  useEffect(() => {
    setComponentName('main' );
    // eslint-disable-next-line
  }, []);
  
  // console.log(componentName);
  return (
    <div className={AddBillStyles.container}>
      <div>Add New Bill</div>
      <AddForm/>
      {/* <ShowGraph/> */}
    </div>
  );
}

export default AddBill;
