import ElectricityStyles from '../../styles/Electricity.module.css';

import ShowGraph from '../../components/ShowGraph';
import React, { useState } from 'react';
import AddForm from '../../components/AddForm';

function Electricity() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    console.log(showForm);
  };

  return (
    <div className={ElectricityStyles.container}>
      <div className={ElectricityStyles.addBill} onClick={handleShowForm}>
        Add New Bill
      </div>
      {showForm && <AddForm/>}
      <ShowGraph />
    </div>
  );
}

export default Electricity;
