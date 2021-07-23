import React from 'react'
import LandingProps from '../components/dashboard/LandingProps';
import NavBar from '../components/navbar/NavBar';

interface dashboardProps {

}

const dashboard: React.FC<dashboardProps> = ({}) => {
        return (
            <>
            <NavBar>
            <LandingProps/>
            </NavBar>
            </>
        );
}

export default dashboard