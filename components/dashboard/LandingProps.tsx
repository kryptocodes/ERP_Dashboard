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

const Data = {
  series: [{
    name: "product1",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
{
  name: "product2",
  data: [15, 45, 35, 51, 49, 62, 100, 91, 148]
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
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
     
    </div>
  );
};

export default LandingProps;
