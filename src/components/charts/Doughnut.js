import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartNode = chartRef.current;
    const chart = new Chart(chartNode, {
      type: 'doughnut',
      data: {
        labels: ['Dataset 1', 'Dataset 2'],
        datasets: [
          {
            data: [50, 50], 
            backgroundColor: ['#4CD7F6', '#E17CFD']
          }
        ]
      },
      options: {
        responsive: true,
        cutout: '80%', 
        plugins: {
          legend: {
            display: false 
          },
          tooltip: {
            enabled: false 
          },
          datalabels: {
            formatter: (value, context) => {
              return '50%';
            },
            color: '#000', 
            font: {
              size: '2'
            },
            padding: 5
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
   <div style={{height: '110px', width: "110px", padding: '10px',background: '#EFEFF8', borderRadius: '50%'}}>
     <canvas ref={chartRef} />
     <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-70%, -60%)', fontWeight: 'bold', fontSize:'32px' }}>50%</span>
      <span style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-100%, -70%)', color: '#999', fontSize: '12px' }}>Direct</span>
   </div>
  );
};

export default DoughnutChart;
