import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}/* @todo compute this value */
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;