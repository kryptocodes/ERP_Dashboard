import React from 'react'


import NavBar from '../components/navbar/NavBar';
import Table from '../components/Table/Table';

interface tableProps {

}

const table: React.FC<tableProps> = ({}) => {
       
        return (
            <NavBar>
                <div className="p-2">
                <h1 className="mx-auto text-2xl font-bold">Table</h1>
                <hr/>
                  <Table/>
                </div>
                </NavBar>
        );
}

export default table