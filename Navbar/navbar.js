import React from 'react';
import './styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar, Nav} from 'react-bootstrap';
import Searchbar from './searchbar.js';
import Mobilenav from './mobilenav.js';
import Notifi from './notif';
import {FaArrowLeft} from "react-icons/fa";
// import {MdNotifications} from "react-icons/md";


class Desknav extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand className="d-lg-none"><Mobilenav/></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto justify-content-around nav" justify="true">
                        <Nav.Link href="#profile"><img alt="profile" className="photo" src="data:image/jpeg;base64,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"/>
                        </Nav.Link>
                        <Nav.Link href="#share"><input type="button" value="Share" className="share"/></Nav.Link>
                        <Nav.Link href="#back" ><FaArrowLeft className="arrow"/></Nav.Link>
                        <Nav.Link href="#search" ><Searchbar/></Nav.Link>
                        <Nav.Link href="#notifications"><Notifi/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>    
            </Navbar>
        )
    }
}

export default Desknav;