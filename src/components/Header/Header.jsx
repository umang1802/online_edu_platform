import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../../context/auth';
import './Header.css';

const Header = (props) => {
    const { setAuthTokens } = useAuth();
    const handleLogout = () => {
        setAuthTokens(null);
    }
    return (
        <Navbar>
            <Navbar.Brand ><span id="navbar-text">INTELLED</span></Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                   <button className="btn btn-primary" onClick={handleLogout}>
                       Logout
                   </button>
                    </Navbar.Text>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;

