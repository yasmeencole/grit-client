// import React, { useContext, useEffect, useState } from "react"
// import { NearEarthObjectContext } from "./NearEarthObjectProvider"
// import "./NearEarthObject.css"
// import { useParams, useHistory } from "react-router-dom"
// import Button from 'react-bootstrap/Button';
// import Card from "react-bootstrap/Card";



// export const NearEarthObjectDetail = () => {

// // useContext() - Used by UI components that need data stored in the context, and exposed by the provider component.

//     const { getNearEarthObjectById, deleteNearEarthObject } = useContext(NearEarthObjectContext)

//     const [nearEarthObjects, getNearEarthObjects] = useState({})

// /*
// useParams() - returns an object of the params for the route rendered.
// Params are placeholders in the URL that begin with a colon, like the `:foodId` 
// param defined in the route in the route below. 

// Example: <Route path="/foods/detail/:nearEarthObjectId(\d+)">
// */
//     const {nearEarthObjectId} = useParams();

// /* The useHistory hook gives you access to the history instance that you may use to
// navigate.

// */
//     const history = useHistory();

//     useEffect(() => {
//         console.log("useEffect", nearEarthObjects)
//         getNearEarthObjectById(nearEarthObjectId)
//         .then((response) => {
//             getNearEarthObjects(response)
//         })
//     }, [])


//     //handles the delete button on the food details. handleRelease gets the food by id then deletes it.
//     const handleRelease = () => {
//         deleteNearEarthObject(nearEarthObjects.id)
//         .then(() => {
//             history.push("/nearearthobjects")
//         })
//     }

    
//     return (
        
//         // returns a representation of food details

//         // <section className="foodDetails">
//         // {/* <h3 className="food__name">{food.name}</h3> */}
//         // {/* <div className="food__rating">Rating: {food.review?.rating}</div> */}

// <Card className="nearEarthObjectCard" style={{ width: '20rem' }}>
//     <Card.Img variant="top" src={nearEarthObjects.image} />
//     <Card.Body>
//         <Card.Title className="nearEarthObject__DetailsName">
//             <h2>
//             {nearEarthObjects.name}
//             </h2>
//         </Card.Title>

//         <Card.Text>
//             <div className="nearEarthObject__neoReference"> NEO Reference: {nearEarthObjects.neo_reference}</div>
//             <div className="nearEarthObject__name"> Name: {nearEarthObjects.name}</div>
//             <div className="nearEarthObject__image"> Image: {nearEarthObjects.image}</div>
//             <div className="nearEarthObject__estimatedDiameter"> Estimated Diameter: {nearEarthObjects.estimated_diameter}</div>
//             <div className="nearEarthObject__isPotentiallyHazardous}"> Potentially Hazardous: {nearEarthObjects.is_potentially_hazardous}</div>
//             <div className="nearEarthObject__closeApproachDate"> Close Approach Date: {nearEarthObjects.close_approach_date}</div>
//             <div className="nearEarthObject__milesPerHour"> Miles Per Hour: {nearEarthObjects.miles_per_hour}</div>
//             <div className="nearEarthObject__orbitingBody"> Orbiting Body: {nearEarthObjects.orbiting_body}</div>
        
//         </Card.Text>

//     </Card.Body>
//     {/* </Card> */}

//         <div>
//         <Button className="nearEarthObjectDeleteButton" onClick={handleRelease}>Delete</Button>

//         {/* <br /> */}

//         {/* this is the edit button, when clicked it sends a put request that updates the food */}
//         <Button className="nearEarthObjectEditButton" onClick={() => { history.push(`/nearearthobjects/edit/${nearEarthObjects.id}`) }}>Edit</Button>
//         </div>
//     </Card>
//         // </section>
//     )
// }

import React, { useContext, useEffect, useState } from "react"
import { NearEarthObjectContext } from "./NearEarthObjectProvider.js"
import { useParams, useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

export const NearEarthObjectDetail = (props) => {
    const { nearEarthObjects, getNearEarthObjects, getNearEarthObjectById, deleteNearEarthObject } = useContext(NearEarthObjectContext)

    // const [nearEarthObjects, getNearEarthObjects] = useState({})


    const history = useHistory();

    // useEffect(() => {
    //     console.log("useEffect", nearEarthObjects)
    //     // getNearEarthObjectById(nearEarthObjectId)
    //     .then((response) => {
    //         getNearEarthObjects(response)
    //     })
    // }, [])


    //handles the delete button on the food details. handleRelease gets the food by id then deletes it.
    const handleRelease = () => {
        deleteNearEarthObject(nearEarthObjects.id)
        .then(() => {
            history.push("/nearearthobjects")
        })
    }

    useEffect(() => {
        getNearEarthObjects()
    }, [])

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
                nearEarthObjects.map(nearEarthObject => {
                    return <section key={`nearEarthObject--${nearEarthObject.id}`} className="nearEarthObject">
                        <div className="nearEarthObject__neoReference"> NEO Reference: {nearEarthObject.neo_reference}</div>
                        <div className="nearEarthObject__name"> Name: {nearEarthObject.name}</div>
                        <div className="nearEarthObject__image"> Image: {nearEarthObject.image}</div>
                        <div className="nearEarthObject__estimatedDiameter"> Estimated Diameter: {nearEarthObject.estimated_diameter}</div>
                        <div className="nearEarthObject__isPotentiallyHazardous}"> Potentially Hazardous: {nearEarthObject.is_potentially_hazardous}</div>
                        <div className="nearEarthObject__closeApproachDate"> Close Approach Date: {nearEarthObject.close_approach_date}</div>
                        <div className="nearEarthObject__milesPerHour"> Miles Per Hour: {nearEarthObject.miles_per_hour}</div>
                        <div className="nearEarthObject__orbitingBody"> Orbiting Body: {nearEarthObject.orbiting_body}</div>


                        //         <div>
//         <Button className="nearEarthObjectDeleteButton" onClick={handleRelease}>Delete</Button>

//         {/* <br /> */}

//         {/* this is the edit button, when clicked it sends a put request that updates the food */}
//         <Button className="nearEarthObjectEditButton" onClick={() => { history.push(`/nearearthobjects/:nearearthobjectId/update`) }}>Edit</Button>
//         </div>
                    </section>

                })
            }
        </article>
    )
}