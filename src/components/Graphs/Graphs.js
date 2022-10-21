import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';

function Graphs({ graphicData }) {
  const initialTableValues = {
    options: {
      // chart: { id: 'bar' },
      xaxis: {
        // categories: () => {
        //   const data = graphData.map(item => item.ay);
        //   return data;
        // },
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
    },
    series: [
      {
        name: 'Tuketim Miktarı',
        // data: () => {
        //   const data = graphData.map(item => item.tuketim_miktari);
        //   return data;
        // },
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Fatura Tutarı',
        // data: () => {
        //   const data = graphData.map(item => item.fatura_tutari);
        //   return data;
        // },
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    dataLabels: {
      enabled: false,
    },
  };
  const [charsData, setcharsData] = useState(initialTableValues);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const data = Object.values(graphicData);
    console.log(data);
    const changedGraphicData = {
      options: {
        // chart: { id: 'bar' },
        xaxis: {
          categories: data.map(item => item.ay),
        },
      },
      series: [
        {
          name: 'Tuketim Miktarı',
          data: data.map(item => item.tuketim_miktari),
        },
        {
          name: 'Fatura Tutarı',
          data: data.map(item => item.fatura_tutari),
        },
      ],
      dataLabels: {
        enabled: false,
      },
    };
    setcharsData(changedGraphicData);
    // console.log('grafik rendered');
    // setGraphData(data);
  }, [graphicData]);

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
