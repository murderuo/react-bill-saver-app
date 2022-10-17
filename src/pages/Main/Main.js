import { useContext, useEffect } from 'react';
import AddBill from '../../components/AddBill';
import GlobalContext from '../../Context/globalContext';

export default function Main() {
  const {  setComponentName } = useContext(GlobalContext);

  useEffect(() => {
    setComponentName('main');
  }, []);

  return (
    <div>
      <AddBill />
    </div>
  );
}
