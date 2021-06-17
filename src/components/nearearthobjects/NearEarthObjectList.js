import React, { useContext, useEffect } from "react"
import { NearEarthObjectContext } from "./NearEarthObjectProvider.js"

export const NearEarthObjectList = (props) => {
    const { nearEarthObjects, getNearEarthObjects } = useContext(NearEarthObjectContext)

    useEffect(() => {
        getNearEarthObjects()
    }, [])

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
                    </section>

                })
            }
        </article>
    )
}