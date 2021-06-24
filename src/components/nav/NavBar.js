import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'


export const NavBar = (props) => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Grit</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link className="navbar__links" href="/">Home</Nav.Link>
            <Nav.Link className="navbar__links" href="/nearearthobjects">My Neo's</Nav.Link>
            {/* <Nav.Link className="navbar__links" href="/favorites">Favorites</Nav.Link> */}
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
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

        // <ul className="navbar">
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/">Home</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/nearearthobjects">My NEO's</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/favorites">Favorites</Link>
        //     </li>
        //     {
        //         (localStorage.getItem("lu_token") !== null) ?
        //             <li className="nav-item">
        //                 <button className="nav-link fakeLink"
        //                     onClick={() => {
        //                         localStorage.removeItem("lu_token")
        //                         props.history.push({ pathname: "/" })
        //                     }}
        //                 >Logout</button>
        //             </li> :
        //             <>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/login">Login</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/register">Register</Link>
        //                 </li>
        //             </>
        //     }        
        // </ul>
    )
}

