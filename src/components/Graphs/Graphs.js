import Chart from 'react-apexcharts';
import { useState } from 'react';

function Graphs() {
  // console.log(data);
  // const [infilationYears, setInfilationYears] = useState([]);
  // useEffect(() => {
  //   const getyear = () => {
  //     let years = [];
  //     if (data != null) {
  //       data.forEach(item => {
  //         years.append(item.year);
  //         console.log(item.year);
  //       });
  //       setInfilationYears(years);
  //     }
  //   };
  //   getyear();
  //   console.log(data);
  // }, []);
  // console.log(infilationYears);
  const [charsData, setcharsData] = useState({
    options: {
      // chart: { id: 'bar' },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
    },
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }
    ],
  });
  return (
    <div>

      <Chart
        options={charsData.options}
        series={charsData.series}
        // series={data}
        type="bar"
        width="500"
      />
    </div>
  );
}

export default Graphs;
