import React from 'react'
import TableResponsive from '../card/TableResponsive';
import Projects from '../dashboard/projects';
import useWindowSize from '../utils/windowAPI';

interface TableProps {

}

const Table: React.FC<TableProps> = ({}) => {
    const value = useWindowSize();
    console.log(value)
    return (
        <>
            { value?.width >= 678 ? <Projects/> : <TableResponsive/> }
        </>
    );
}

export default Table