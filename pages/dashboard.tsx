import React from 'react'
import LandingProps from '../components/dashboard/LandingProps';
import NavBar from '../components/navbar/NavBar';

interface dashboardProps {

}

const dashboard: React.FC<dashboardProps> = ({}) => {
        return (
            <>
            <NavBar>
                <div className="p-2">
                    <h1 className="text-lg font-medium pb-2">Hello John,</h1>
            <LandingProps/>
            </div>
            </NavBar>
            </>
        );
}

export default dashboard