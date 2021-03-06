import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "bootstrap/dist/css/bootstrap.min.css"


export const Grit = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("grit_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route exact path="/login" render={Login} />
        <Route exact path="/register" render={Register} />
    </>
)
