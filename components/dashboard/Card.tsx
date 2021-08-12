import React from 'react'
import { Popover } from '@headlessui/react'


interface CardProps {
    props: {
        box:  JSX.Element,
        bottom: JSX.Element,
    }
}



const Card: React.FC<CardProps> = (props) => {
        return (
                <div className="bg-indigo-500 text-white rounded-xl h-25 pb-5 px-5">
                  <Popover as="div" className="relative flex flex-end">
                    
                    <Popover.Button as="button" className="py-2 px-0 ml-auto"> 
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mb-4 mt-2 rounded-xl bg-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </Popover.Button>
                 
                 <Popover.Panel className="absolute right-0 pt-10 z-10">
                     <div className="bg-white overflow-hidden justify-end ml-auto rounded-lg shadow-lg text-black ring-1 ring-black ring-opacity-5">
                       <div className="grid grid-row p-2 text-lg">
                       <button>Edit</button>
                       <button>Copy</button>
                       <button>Download</button>
                       </div>
                    </div>
                 </Popover.Panel>
                 
                  </Popover>
                 
                    {props.box}
                
            
                  <p className="relative bottom-0 text-xl pt-2 ml-2 ">
                    {props.bottom}
                  </p>
                </div>
        );
}

export default Card