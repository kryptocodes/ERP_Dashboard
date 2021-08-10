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
const Data = {
  series: [{
    name: "product1",
    data: [10, 41, 100, 16, 148]
},
{
  name: "product2",
  data: [15, 45, 35, 91, 148]
}],
options: {
  chart: {
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
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
         <div className="w-full h-1/2"> 
   
          
   <Chart type="line" options={Data.options} series={Data.series} chart={Data.options.chart} />

</div>

      
      </div>
      <div className="mx-auto p-4 ">
      <Chart type="area" options={Data1.options} series={Data1.series}  />
      </div>
    </div>
  );
};

export default LandingProps;
