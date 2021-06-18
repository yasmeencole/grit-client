import React from "react"
import { Route } from "react-router-dom"
import { NearEarthObjectProvider } from "./nearearthobjects/NearEarthObjectProvider"
import { NearEarthObjectList } from "./nearearthobjects/NearEarthObjectList"
import { NearEarthObjectForm } from "./nearearthobjects/NearEarthObjectForm"
import { NearEarthObjectDetail } from "./nearearthobjects/NearEarthObjectDetail"

export const ApplicationViews = () => {
    return (
    <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
            <NearEarthObjectProvider>
                <Route exact path="/">
                    <NearEarthObjectList />
                </Route>   
                <Route exact path="/nearearthobjects">
                    <NearEarthObjectList />
                </Route>
                <Route exact path="/nearearthobjects/new">
                    <NearEarthObjectForm />
                </Route> 
                <Route exact path="/nearearthobjects/:nearearthobjectId/detail">
                    <NearEarthObjectDetail />
                </Route>
                <Route exact path="/nearearthobjects/:nearearthobjectId/update">
                    <NearEarthObjectForm />
                </Route> 
            </NearEarthObjectProvider>
    </>
    )
}
