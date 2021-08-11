import React from 'react'
import AccountPage from '../components/accounts/accountPage';
import NavBar from '../components/navbar/NavBar';

interface accountsProps {

}

const accounts: React.FC<accountsProps> = ({}) => {
        return (
            <>
            <NavBar>
            <AccountPage/>
            </NavBar>
            </>
        );
}

export default accounts