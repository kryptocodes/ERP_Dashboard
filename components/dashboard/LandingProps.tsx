import React from "react";
import Card from "./Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {
  CurrencyRupeeIcon,
  TrendingUpIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import Projects from "./projects";
import UseWindowSize from "../utils/windowAPI";
import TableResponsive from "../card/TableResponsive";
interface LandingPropsProps {}





const Data =  
  {
          
    series: [50, 20, 30],
   
    options: {
      chart: {
        type: 'radialBar',
        offsetY: 0,
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
      name: "Products",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  options: {
    chart: {
      height: 350,
      type: 'bar',
      zoom: {
        enabled: false
      }
    },
    colors: ["#6366f1"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  },
  

};






const LandingProps: React.FC<LandingPropsProps> = ({}) => {
  const value = UseWindowSize()
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
    


      <div className="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-3 ">
      
                <div className="col-span-2 bg-white rounded-md" >
            
                  <div className="flex items-center justify-between p-4 border-b dark:border-primary">
                    <h4 className="text-lg font-semibold text-gray-500 dark:text-light">Chart</h4>
                   
                  </div>
                  <div className="mx-auto ">
                  <Chart type="bar" height="350" options={Data1.options} series={Data1.series}  />
                  </div>
                </div>
                <div className="col-span bg-white rounded-md bg-indigo-100" >
            
                  <div className="flex items-center justify-between p-4 border-b dark:border-primary">
                    <h4 className="text-lg font-semibold text-gray-500 dark:text-light">Chart</h4>
                   
                  </div>
                  <div className="mx-auto ">
                  <Chart type="area" height="350" options={Data1.options} series={Data1.series}  />
                  </div>
                </div>
                </div>

  

     {value?.width <= 678 ? <TableResponsive/> : <Projects/> }
    </div>
  );
};

export default LandingProps;
