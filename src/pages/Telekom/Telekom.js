import React, { useContext, useEffect, useState } from 'react';
import AddForm from '../../components/AddForm';
import ShowGraph from '../../components/ShowGraph';
import GlobalContext from '../../Context/globalContext';
import WaterStyles from '../../styles/Water.module.css';

function Telekom() {
  const [showForm, setShowForm] = useState(false);
  const { componentName, setComponentName } = useContext(GlobalContext);

  useEffect(() => {
    setComponentName('telekominikasyon');
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
      <ShowGraph componentName={componentName}/>
      {/* <ShowGraph componentName={componentName} /> */}
    </div>
  );
}

export default Telekom;
