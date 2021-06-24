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
        <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                history.push({ pathname: "/nearearthobjects/new" })
            }}
            >Create New Near Earth Object
        </button>
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
        {/* <article className="nearEarthObjects">
            { */}
                {/* // nearEarthObjects.map(nearEarthObject => { */}
                    {/* // return <section key={`nearEarthObject--${nearEarthObject.id}`} className="nearEarthObject"> */}
                        {/* <Card style={{ width: '18rem' }}> */}
                            {/* <Card.Img variant="top" src={nearEarthObject.image} /> */}
                            {/* {console.log(nearEarthObject.image)} */}
                            {/* <Card.Body> */}
                                {/* <Card.Title>Name: {nearEarthObject.name}</Card.Title> */}
                                {/* <Card.Text> */}
                                {/* {nearEarthObject.name} */}
                                {/* </Card.Text> */}
                                {/* <Button variant="primary">Go somewhere</Button> */}
                                {/* <Button className="nearEarth__detailButton"onClick={() => { history.push("/nearearthobjects/detail/${}") }}>NEO Detail</Button> */}
                                {/* <Link to={`/nearearthobjects/detail/${nearEarthObject.id}`}>
                                    <Button>
                                        Details
                                    </Button>
                                </Link>
                            </Card.Body> */}
                            {/* </Card>
                    </section> */}

                {/* }) */}
            {/* } */}
        {/* </article> */}
        </>
    )
}

