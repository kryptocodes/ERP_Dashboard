import React from 'react'

interface LandingPropsProps {

}

const LandingProps: React.FC<LandingPropsProps> = ({}) => {
        const Card = () => (
            <div className="bg-indigo-500 text-white h-48 px-5">
                <div className="pt-20 flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>20000.00
                </div>
                <p className="text-xl pt-5 ml-2">Total Profit</p>
            </div>
            )
        return (
            <div className="text-black  text-4xl">
                  <h1 className="ml-auto">Dashboard</h1>
                  <div className="grid lg:grid-cols-3 md:grid-col-6 gap-2">
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                  </div>
            </div>
        
        );
}

export default LandingProps