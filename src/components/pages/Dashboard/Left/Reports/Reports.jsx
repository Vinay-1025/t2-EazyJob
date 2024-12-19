import React, { useState } from 'react';
import './Reports.css'
import ReportCharts from '../ReportCharts/ReportCharts';

const Reports = () => {
    const [chartType, setChartType] = useState('line');

    const handleChartTypeChange = (type) => {
        setChartType(type);
    };

    const activeStyle = { color: '#fff', background: 'var(--primarydark)', border: '1px solid var(--primary)' };

    return (
        <div className='card'>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">Reports</h5>
                    <div className='chart-type-picker d-flex'>
                        <div 
                            onClick={() => handleChartTypeChange('line')} 
                            style={chartType === 'line' ? activeStyle : { cursor: 'pointer' }}
                            className='chart-type-button'
                        >
                            Line
                        </div>
                        <div 
                            onClick={() => handleChartTypeChange('area')} 
                            style={chartType === 'area' ? activeStyle : { cursor: 'pointer' }}
                            className='chart-type-button'
                        >
                            Area
                        </div>
                        <div 
                            onClick={() => handleChartTypeChange('bar')} 
                            style={chartType === 'bar' ? activeStyle : { cursor: 'pointer' }}
                            className='chart-type-button'
                        >
                            Bar
                        </div>
                    </div>
                </div>
                <ReportCharts chartType={chartType} key={chartType} />
            </div>
        </div>
    );
};

export default Reports;
