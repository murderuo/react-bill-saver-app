import React, { useState } from 'react';
import AddForm from '../../components/AddForm';
import ShowGraph from '../../components/ShowGraph';
import WaterStyles from '../../styles/Water.module.css';

function GasBill() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    console.log(showForm);
  };

  return (
    <div className={WaterStyles.container}>
      <div className={WaterStyles.addBill} onClick={handleShowForm}>
        Add New Bill
      </div>
      {showForm && <AddForm />}
      <ShowGraph />
    </div>
  );
}

export default GasBill;
