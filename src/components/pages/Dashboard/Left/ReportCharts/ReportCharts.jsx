import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ReportCharts = ({ chartType }) => {
    const [data, setData] = useState({
        series: [
            {
                name: 'Jobs',
                data: [31, 40, 28, 51, 42, 82, 56,89],
            },
            {
                name: 'Revenue',
                data: [11, 32, 45, 32, 34, 52, 41,65],
            },
            {
                name: 'Users',
                data: [15, 11, 32, 18, 9, 24, 11,128],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false,
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradients: true,
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350,
                    },
                },
            },
            markers: {
                size: 4,
            },
            colors: ['#212EA0', '#2eca6a', '#ff771d'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.2,
                    opacityTo: 0.4,
                    stops: [0, 90, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2024-12-01T00:00:00Z',
                    '2024-12-01T04:04:00Z',
                    '2024-12-01T08:08:00Z',
                    '2024-12-01T12:30:00Z',
                    '2024-12-01T15:50:00Z',
                    '2024-12-01T18:00:00Z',
                    '2024-12-01T20:00:00Z',
                    '2024-12-01T23:59:00Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    });

    useEffect(() => {
        const updatedOptions = {
            ...data.options,
            chart: {
                ...data.options.chart,
                type: chartType,
            },
            fill: {
                ...data.options.fill,
                gradient: {
                    ...data.options.fill.gradient,
                    opacityFrom: chartType === 'line' ? 0.6 : 0.1,
                    opacityTo: chartType === 'line' ? 1 : 0.3,
                },
            },
        };

        setData((prevData) => ({
            ...prevData,
            options: updatedOptions,
        }));
    }, [chartType]);

    return (
        <div className="chart-container">
            <Chart 
                options={data.options}
                series={data.series}
                type={data.options.chart.type}
                height={data.options.chart.height}
            />
        </div>
    );
};

export default ReportCharts;
