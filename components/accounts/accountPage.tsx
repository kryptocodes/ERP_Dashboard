import React from 'react'

interface accountPageProps {

}

const FieldBox = ({label="",type="",defaultValue=""}) => (
  <>
  <label htmlFor={label} className="block text-sm font-medium text-gray-700">
  {label}
</label>
<input
  type={type}
  name={label}
  id={label}
  autoComplete={label}
  defaultValue={defaultValue}
  className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
/>
  </>
  )

const AccountPage: React.FC<accountPageProps> = ({}) => {
        return (
            <div className="container">
            
                <div className="p-4 shadow-lg overflow-hidden sm:rounded-md">
                <h1>Edit Profile</h1>
                <hr/>
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                      <FieldBox label="Company" type="text" defaultValue="Company Name"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FieldBox label="Username" type="text" defaultValue="john@gmail.com"/>
                    </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6 pt-2">
                    <div className="col-span-3 lg:col-span-3 sm:col-span-6">
                      <FieldBox label="First Name" type="text" defaultValue="John"/>
                    </div>

                    <div className="col-span-3 lg:col-span-3 sm:col-span-6">
                      <FieldBox label="Last Name" type="text" defaultValue="John"/>
                    </div>
                    </div>
                    </div>
                    <div className="px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
                    </div>
                  
            </div>
        );
}

export default AccountPage