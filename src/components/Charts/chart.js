import React from 'react';
import ChartBar from './chartBar';
import './chart.css'

const Chart = props => {
   const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
   const totalMaximum = Math.max(...dataPointValues);

return <div className='chart'>
        {props.dataPoints.map(datapoint => 
        <ChartBar 
        value={datapoint.value} 
        maxValue={totalMaximum} 
        label={datapoint.label} 
        key={datapoint.label} />
        )}
</div>
};
export default Chart;