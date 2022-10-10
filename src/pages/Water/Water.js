import WaterStyles from '../../styles/Water.module.css';
import React, { useState } from 'react';
import ShowGraph from '../../components/ShowGraph';
import AddForm from '../../components/AddForm';


function WaterBill() {const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    console.log(showForm);
  };

  return (
    <div className={WaterStyles.container}>
      <div className={WaterStyles.addBill} onClick={handleShowForm}>
        Add New Bill
      </div>
      {showForm && <AddForm/>}
      <ShowGraph />
    </div>
  );
}

export default WaterBill;
