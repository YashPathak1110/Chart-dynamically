import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (!data || !data.datasets || data.datasets.length === 0) {
      return; // No data available, so don't initialize the chart
    }

    const total = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
    const calculatedPercentage = (data.datasets[0].data[1] / total) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, calculatedPercentage)); // Clamp the percentage between 0 and 100
    setPercentage(clampedPercentage);

    if (clampedPercentage >= 0 && clampedPercentage <= 100) {
      if (chartRef && chartRef.current) {
        const ctx = chartRef.current.getContext('2d');

        const pixelRatio = window.devicePixelRatio || 1;
        chartRef.current.width = 400 * pixelRatio;
        chartRef.current.height = 400 * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);

        const newChartInstance = new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: {
            aspectRatio: 2,
            rotation: 0.5 * Math.PI,
            cutoutPercentage: 90,
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
        setChartInstance(newChartInstance);
      }
    }
  }, [data]);

  useEffect(() => {
    if (chartInstance) {
      const total = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
      const calculatedPercentage = (data.datasets[0].data[0] / total) * 100;
      const clampedPercentage = Math.min(100, Math.max(0, calculatedPercentage)); // Clamp the percentage between 0 and 100
      setPercentage(clampedPercentage);
      chartInstance.data.datasets[0].data = data.datasets[0].data;
      chartInstance.update();
    }
  }, [data, chartInstance]);

  return (
    <div className='chart-container'>
      {percentage >= 0 && percentage <= 100 && (
        <canvas ref={chartRef} style={{ height :"17rem"}} />
      )}
      <h1 style={{ fontSize: "70px", marginTop: "-12rem", textAlign: "center", }}>{percentage.toFixed(0)}<span style={{ fontSize: "50px" }}>%</span></h1>
    </div>
  );
};

export default DoughnutChart;
