import React from "react";
import Card from "./Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {
  CurrencyRupeeIcon,
  TrendingUpIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
interface LandingPropsProps {}





const Data =  
  {
          
    series: [50, 20, 30],
   
    options: {
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#ffffff",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#f59e0b',
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: '#ffffff',
              offsetY: -2,
              fontSize: '22px'
            },
            
          }
        }
      },
      grid: {
        padding: {
          top: -10
        }
      },
      fill: {
        type: 'gradient',
        colors: ['#f59e0b', '#f5b0b0'],
        gradient: {
          shade: 'dark',
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        },
      },
      labels: ['Average Results'],
    },
  
  
  };

const Data1 = 
  {
          
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  
  
  }



const LandingProps: React.FC<LandingPropsProps> = ({}) => {
  return (
    <div className="text-black  text-4xl">
      <div className="grid lg:grid-cols-3 md:grid-col-6 gap-2">
        <Card
          box={
            <>
              <div className="p-5 flex rounded-lg bg-indigo-400 ">
                <CurrencyRupeeIcon className="h-10 w-10 mr-1" />
                20000.00
              </div>
            </>
          }
          bottom={
            <>
              <TrendingUpIcon className="h-6 w-5" />
              Total Profit
            </>
          }
        />
        <Card
          box={
            <>
              <div className="p-2">
                <TrendingUpIcon className="h-5 w-10  rounded-lg bg-indigo-400 " />
                500
              </div>
            </>
          }
          bottom={
            <>
              <ClipboardListIcon className="h-6 w-5" />
              Total Order
            </>
          }
        />
        <Card
          box={
          
           <Chart options={Data.options} series={Data.series} type="radialBar" />

          }
          bottom={
            <>
            <p>Sales</p>
            </>
          }
        />

    
 

      
      </div>
      <div className="mx-auto pt-2">
      <Chart type="area" options={Data1.options} series={Data1.series}  />
      </div>
    </div>
  );
};

export default LandingProps;
