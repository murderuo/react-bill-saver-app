import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';

function Graphs({ graphicData }) {
  const data = Object.values(graphicData);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    console.log('grafik rendered');
    setGraphData(data);
  }, [graphicData]);

  // useEffect(() => {
  //   data = Object.values(graphicData);
  // }, [graphicData]);

  const initialTableValues = {
    options: {
      // chart: { id: 'bar' },
      xaxis: {
        categories: () => {
          const data = graphData.map(item => item.ay);
          return data;
        },
        // categories: [
        //   'Feb',
        //   'Mar',
        //   'Apr',
        //   'May',
        //   'Jun',
        //   'Jul',
        //   'Aug',
        //   'Sep',
        //   'Oct',
        // ],
      },
    },
    series: [
      {
        name: 'Tuketim Miktarı',
        data: () => {
          const data = graphData.map(item => item.tuketim_miktari);
          return data;
        },
        // data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Fatura Tutarı',
        data: () => {
          const data = graphData.map(item => item.fatura_tutari);
          return data;
        },
        // data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    dataLabels: {
      enabled: false,
    },
  };

  const [charsData, setcharsData] = useState(initialTableValues);
  return (
    <div>
      <Chart
        options={charsData.options}
        series={charsData.series}
        // series={data}
        type="bar"
        width="500"
      />

      {JSON.stringify(graphData)}
      {/* {JSON.stringify(graphData.map(item => item.fatura_tutari))} */}
      {JSON.stringify([...graphData.map(item => item.ay)])}
    </div>
  );
}

export default Graphs;
