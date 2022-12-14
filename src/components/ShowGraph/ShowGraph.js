import GrapsStyles from '../../styles/Graph.module.css';
import Graphs from '../Graphs/Graphs';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import GlobalContext from '../../Context/globalContext';

function ShowGraph() {
  const [year, setYear] = useState(2020);
  const [data, setData] = useState([]);
  const {componentName}=useContext(GlobalContext)


  const fetchData = async () => {
    const url = `${componentName}/${year}`;
    // console.log(url);
    const response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [componentName, year]);

  const handleChange = e => {
    const newYear = e.target.value;
    setYear(parseInt(newYear));
  };

  return (
    <div className={GrapsStyles.graphcontainer}>
      <div className={GrapsStyles.graphtitle}>Consume graphics by years</div>
      <div className={GrapsStyles.grapshselectyears}>
        <label>Year:</label>
        <select onChange={handleChange}>
          
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className={GrapsStyles.graphs}>
        <Graphs graphicData={data} />
        <br />
        {/* {JSON.stringify(data)} */}
      </div>
    </div>
  );
}

export default ShowGraph;
