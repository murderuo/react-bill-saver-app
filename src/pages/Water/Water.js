import WaterStyles from '../../styles/Water.module.css';
import React, { useContext, useEffect, useState } from 'react';
import ShowGraph from '../../components/ShowGraph';
import AddForm from '../../components/AddForm';
import GlobalContext from '../../Context/globalContext';

function WaterBill() {
  const { componentName, setComponentName } = useContext(GlobalContext);

  useEffect(() => {
    setComponentName('su');
  }, []);

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
      <ShowGraph componentName={componentName} />
    </div>
  );
}

export default WaterBill;
