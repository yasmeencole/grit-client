import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'
import Astro from "../images/astro310.png"


export const NavBar = (props) => {
    return (
        <Navbar bg="light" variant="light" className="lightNavBar">
            <img src={Astro} alt="atro img" className="astroImg"/>
            <Navbar.Brand href="/">Grit</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link className="navbar__links" href="/">Home</Nav.Link>
            <Nav.Link className="navbar__links" href="/nearearthobjects">My Neo's</Nav.Link>
            {/* <Nav.Link className="navbar__links" href="/favorites">Favorites</Nav.Link> */}
            {
                (localStorage.getItem("grit_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("grit_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }  
            </Nav>
            <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            {/* <Button variant="outline-primary">Search</Button> */}
            </Form>
        </Navbar>

    )
}

