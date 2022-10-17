import GrapsStyles from '../../styles/Graph.module.css';
import Graphs from '../Graphs/Graphs';
import {useEffect} from 'react'

function ShowGraph() {
  

  const fetchData =()=>{


  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className={GrapsStyles.graphcontainer}>
      <div className={GrapsStyles.graphtitle}>Consume graphics by years</div>
      <div className={GrapsStyles.grapshselectyears}>
        <label>Year:</label>
        <select>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className={GrapsStyles.graphs}>
        <Graphs />
      </div>
    </div>
  );
}

export default ShowGraph;
