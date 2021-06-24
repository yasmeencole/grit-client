import React, { useContext, useEffect, useState } from "react"
import { NearEarthObjectContext } from "./NearEarthObjectProvider.js"
import { useParams, useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

export const NearEarthObjectDetail = (props) => {
    const { nearEarthObjects, getNearEarthObjectById, deleteNearEarthObject } = useContext(NearEarthObjectContext)
    const {nearEarthObjectId} = useParams()

    const [nearEarthObject, setNearEarthObject] = useState({})


    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", nearEarthObjects)
        getNearEarthObjectById(nearEarthObjectId)
        .then((response) => {
            setNearEarthObject(response)
        })
    }, [])


    //handles the delete button on the food details. handleRelease gets the food by id then deletes it.
    const handleRelease = () => {
        deleteNearEarthObject(nearEarthObject.id)
        .then(() => {
            history.push("/nearearthobjects")
        })
    }


    //handles the delete button on the food details. handleRelease gets the food by id then deletes it.
    // const handleRelease = () => {
    //     deleteNearEarthObject(nearEarthObjects.id)
    //     .then(() => {
    //         history.push("/nearearthobjects")
    //     })
    // }


    return (
        <article className="nearEarthObjects">
            {
                // nearEarthObjects.map(nearEarthObject => {
                    <section key={`nearEarthObject--${nearEarthObject.id}`} className="nearEarthObject">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={nearEarthObject.image} />
                        <Card.Body>
                            <Card.Title><div className="nearEarthObject__name"> Name: {nearEarthObject.name}</div></Card.Title>
                            <Card.Text>
                                <div className="nearEarthObject__neoReference"> NEO Reference: {nearEarthObject.neo_reference}</div>
                                {/* <div className="nearEarthObject__image"> Image: {nearEarthObject.image}</div> */}
                                <div className="nearEarthObject__estimatedDiameter"> Estimated Diameter: {nearEarthObject.estimated_diameter}</div>
                                <div className="nearEarthObject__isPotentiallyHazardous}"> Potentially Hazardous: {nearEarthObject.is_potentially_hazardous}</div>
                                <div className="nearEarthObject__closeApproachDate"> Close Approach Date: {nearEarthObject.close_approach_date}</div>
                                <div className="nearEarthObject__milesPerHour"> Miles Per Hour: {nearEarthObject.miles_per_hour}</div>
                                <div className="nearEarthObject__orbitingBody"> Orbiting Body: {nearEarthObject.orbiting_body}</div>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
        <div>
         <Button className="nearEarthObjectDeleteButton" onClick={handleRelease}>Delete</Button>

         {/* <br /> */}

         {/* this is the edit button, when clicked it sends a put request that updates the neo */}
         <Button className="nearEarthObjectEditButton" onClick={() => { history.push(`/nearearthobjects/update/${nearEarthObject.id}`) }}>Edit</Button>
         </div>
                        </Card>



                    </section>

                // }
                // )
            }
        </article>
    )
}
