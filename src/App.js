import React, { useState } from 'react';
import './App.css';
import HalfDoughnutGaugeChart from './HalfDoughnutGaugeChart';
import DoughnutChart from './DoughnutChart';

const App = () => {
  const [percentageValues, setPercentageValues] = useState([
  ]);

  // Function to update percentage values for a specific Doughnut chart
  const updatePercentageValues = (index, newPercentages) => {
    const newPercentageValues = [...percentageValues];
    newPercentageValues[index] = newPercentages;
    setPercentageValues(newPercentageValues);
  };
  const [doughnutChartData, setDoughnutChartData] = useState([
    {
      datasets: [{
        data: [40, 60], // Initial data for the first Doughnut chart
        backgroundColor: [
          'rgb(92, 27, 153)',
          'rgba(0, 0, 0, 0.3)',
        ],
        borderWidth: [7,0],
        borderColor: [
          'rgb(92, 27, 153)',
          'rgba(0, 0, 0, 0)'
        ]  
      }]
    },
    {
      datasets: [{
        label: 'Dataset 2',
        data: [80, 20], // Initial data for the second Doughnut chart
        backgroundColor: [
          'rgb(247, 110, 60)',
          'rgba(0, 0, 0, 0.3)'
        ],
        borderColor: [
          'rgb(247, 110, 60)',
          'rgba(0, 0, 0, 0.3)'
        ],
        borderWidth: [7,0]
      }]
    },
    {
      datasets: [{
        label: 'Dataset 3',
        data: [50, 50], // Initial data for the third Doughnut chart
        backgroundColor: [
          'rgb(5, 215, 124)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgb(5, 215, 124)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderWidth: [7,0]
      }]
    }
  ]);

  // Function to update data values for Doughnut charts
 

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginTop: "5rem", fontSize: "3rem" }}>HalfDoughnut chart</h1>
      </header>
      <div className="chart-container">
        <HalfDoughnutGaugeChart dataValues={[60, 40]} /><br />
        <h1 style={{ marginTop: "3rem", fontSize: "3rem" }}>Doughnut charts</h1>
        <div style={{ display: "flex", marginTop: "3rem" }}>
          {doughnutChartData.map((chartData, index) => (
            <DoughnutChart key={index} data={chartData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
