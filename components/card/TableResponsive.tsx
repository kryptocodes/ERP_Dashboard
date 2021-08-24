import React from 'react'

interface TableResponsiveProps {

}

const Data = [
  {
      Project:"Example 1",
      Client: "Example",
      Status: "Active",
  },
  {
    Project:"Example 1",
    Client: "Example",
    Status: "Active",
},
{
    Project:"Example 1",
    Client: "Example",
    Status: "Active",
},
{
    Project:"Example 1",
    Client: "Example",
    Status: "Active",
}
]

const TableResponsive: React.FC<TableResponsiveProps> = ({}) => {

    const Card = ({data,key}:any) => (
        <>
        <div key={key} className="w-full rounded-lg shadow-lg p-4 mb-2">
            <div className="flex-1">
                <h1 className="font-semibold text-lg tracking-wide">{data?.Project}</h1>
                <h3 className="font-semibold text-lg tracking-wide">{data?.Client}</h3>
                <div className="flex mt-4 mx-auto">
            <img
              className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
              src="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <img
              className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
              src="https://randomuser.me/api/portraits/women/2.jpg"
            />
            <img
              className="w-6 h-6 rounded-full border-gray-200 border  transform hover:scale-125"
              src="https://randomuser.me/api/portraits/men/3.jpg"
            />
          </div>
                <p>{data?.Status}</p>
                
        
            <div className="flex justify-end">
            
                <button className="w-4 mr-4 transform hover:text-purple-500 hover:scale-110" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            
            <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            </div>
            </div>
        </div>
        </> 
    )   
        return (
            <>
                {Data.map((item,index) => <Card key={index} data={item} />)}
            </>
        );
}

export default TableResponsive