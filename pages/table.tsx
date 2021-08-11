import React from 'react'
import Projects from '../components/dashboard/projects';
import NavBar from '../components/navbar/NavBar';

interface tableProps {

}

const table: React.FC<tableProps> = ({}) => {
        return (
            <NavBar>
                <div className="p-2">
                <h1 className="mx-auto text-2xl font-bold">Table</h1>
                <hr/>
                <Projects/>
                </div>
                </NavBar>
        );
}

export default table