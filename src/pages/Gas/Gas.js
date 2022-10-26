import React, { useContext, useEffect, useState } from 'react';
import AddForm from '../../components/AddForm';
import ShowGraph from '../../components/ShowGraph';
import GlobalContext from '../../Context/globalContext';
import WaterStyles from '../../styles/Water.module.css';

function GasBill() {
  const [showForm, setShowForm] = useState(false);
  const { componentName, setComponentName } = useContext(GlobalContext);

  useEffect(() => {
    setComponentName('gaz');
    // eslint-disable-next-line
  }, []);

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

export default GasBill;
