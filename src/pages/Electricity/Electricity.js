import ElectricityStyles from '../../styles/Electricity.module.css';

import ShowGraph from '../../components/ShowGraph';
import React, { useContext, useState, useEffect } from 'react';
import AddForm from '../../components/AddForm';
import GlobalContext from '../../Context/globalContext';

function Electricity() {
  const [showForm, setShowForm] = useState(false);
  const { componentName, setComponentName } = useContext(GlobalContext);

  useEffect(() => {
    setComponentName('elektrik');
    // eslint-disable-next-line
  }, []);

  const handleShowForm = () => {
    setShowForm(true);
    // console.log(showForm);
  };

  return (
    <div className={ElectricityStyles.container}>
      <div className={ElectricityStyles.addBill} onClick={handleShowForm}>
        Add New Bill
      </div>
      {showForm && <AddForm />}
      {componentName === 'main' ? <div>Loading..</div> : <ShowGraph />}
    </div>
  );
}

export default Electricity;
