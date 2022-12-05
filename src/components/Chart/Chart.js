import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    const valueArray = dataPoints.map(dataPoint => dataPoint.value);
    const maxMonthValue = Math.max(...valueArray);

    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxMonthValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;