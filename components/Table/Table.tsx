import React from 'react'


import dynamic from 'next/dynamic';
import TableResponsive from '../card/TableResponsive';
import Projects from '../dashboard/projects';

import UseWindowSize from '../utils/windowAPI'

interface TableProps {

}

const Table: React.FC<TableProps> = ({}) => {
    const value = UseWindowSize();
    console.log(value)
    return (
        <>
            { value?.width >= 678 ? <Projects/> : <TableResponsive/> }
        </>
    );
}

export default Table