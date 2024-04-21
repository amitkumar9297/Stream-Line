import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3],
                    backgroundColor: [
                        'red',
                        'blue',
                        'yellow'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                // Chart options
            }
        });
    }, []);

    return <canvas ref={chartRef} />;
};

export default DoughnutChart;