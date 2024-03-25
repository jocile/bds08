import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

const PieChart = ({ labels = [], series = [] }: Props) => {
  return (
    <div className="pie-chart">
      <ReactApexChart
        options={buildPieChartConfig(labels)}
        type="donut"
        width={'100%'}
        height={'350px'}
        series={series}
      />
    </div>
  );
};

export default PieChart;
