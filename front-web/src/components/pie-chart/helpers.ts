import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = []) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '16px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors: ['#3e82f7', '#04d182', '#ffc107', '#ff6b72'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 10,
      labels: {
        colors: ['#b4bed2']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 5
      }
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '50%',
          labels: {
            show: true,
            total: {
              show: false,
              showAlways: true,
              fontSize: '16px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};
