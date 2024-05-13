import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';

const HalfDoughnutGaugeChart = ({ dataValues }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    console.log(dataValues);
    if (!dataValues || dataValues.length === 0) {
      return; // No data available, so don't initialize the chart
    }

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            label: 'Weekly Sales',
            data: dataValues,
            backgroundColor: [
              '#7fffd4',
              'rgba(0, 0, 0, 0.1)'
            ],
            borderColor: [
              'rgb(33, 232, 166)',
              'rgba(0, 0, 0, 1)'
            ],
            borderWidth: [22, 1],
            borderRadius: [100,100],
            
          }]
        },
        options: {
          circumference: Math.PI,
          cutoutPercentage: 100,
          rotation: Math.PI,
          aspectRatio: 2,
          plugins: {
            legend: {
              display: false
            },
          },
          tooltips: {
            filter: (tooltipItem) => {
              return tooltipItem.dataIndex === 0;
            }
          }
        }
      });
      setChartInstance(newChartInstance);
    }
  }, [dataValues]);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.data.datasets[0].data = dataValues;
      chartInstance.update();
    }
  }, [dataValues, chartInstance]);
  
 

  return (
    <div className="chartContainer" style={{ border: "1px solid black", height: "270px",marginTop: "6rem", borderRadius: "10px" }}>
      <canvas ref={chartRef} style={{marginTop :"2rem"}}/>
      <h1 style={{ fontSize: "90px", marginTop: "-9.5rem" }}>{dataValues && dataValues[0]}<span style={{fontSize: "30px",fontWeight: "450"}}>/Avg</span></h1>
    </div>
  );
};

export default HalfDoughnutGaugeChart;
