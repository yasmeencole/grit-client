import React, { useContext, useEffect } from "react"
import { NearEarthObjectContext } from "./NearEarthObjectProvider.js"
import { useHistory } from "react-router-dom"
import {NearEarthObject} from "./NearEarthObject"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"



export const NearEarthObjectList = (props) => {
    const { nearEarthObjects, getNearEarthObjects } = useContext(NearEarthObjectContext)
    const history = useHistory();


    useEffect(() => {
        getNearEarthObjects()
    }, [])
    
    console.log(nearEarthObjects)
    return (
        <>
            <header className="nearEarthObjects__header">
            <h1>Near Earth Objects</h1>
        </header>
        <Button className="btn btn-warning"
            onClick={() => {
                history.push({ pathname: "/nearearthobjects/new" })
            }}
            >Create New Near Earth Object
        </Button>
        <div className="neo_list">
            {/* <h1>My Events</h1>

            <button onClick={() => history.push("/nearearthobjects/create")}>
                Add Event
            </button> */}

            <div className="nearEarthObjects">
                {nearEarthObjects.map(neo => {
                    return <NearEarthObject key={neo.id} nearEarthObject={neo} />
                })}
            </div>
        </div>
        </>
    )
}

