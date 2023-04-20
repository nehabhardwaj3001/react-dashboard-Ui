import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
const data = {
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Dataset',
            data: [25000000, 35000000, 25000000, 35000000, 25000000, 35000000],
            fill: false,
            borderColor: '#8E7CFD',
            tension: 0.4
        }
    ]
};

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 40000000,
            ticks: {
                stepSize: 10000000 // increase the spacing between two values on y-axis
              }
        },
        x: {
        grid: {
        drawBorder: false,
        color: 'rgba(0,0,0,0)',
        lineWidth: 0,
        zeroLineColor: 'rgba(0,0,0,0)',
        zeroLineWidth: 0,
      },
    },
    }
};
const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartNode = chartRef.current;
        const chart = new Chart(chartNode, {
            type: 'line',
            data: data,
            options: options
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div style={{ opacity: '80%' }}>
            <canvas ref={chartRef}  style={{ height: '210px'}}/>
        </div>
    );
};

export default LineChart;
