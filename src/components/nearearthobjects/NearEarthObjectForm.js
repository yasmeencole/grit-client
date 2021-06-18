import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { NearEarthObjectContext } from "./NearEarthObjectProvider.js"


export const NearEarthObjectForm = () => {
    const history = useHistory()
    const { createNearEarthObject, getNearEarthObjectById, updateNearEarthObject } = useContext(NearEarthObjectContext)
    const {nearEarthObjectId} = useParams()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentEvent, setCurrentEvent] = useState({
        neo_reference: 0,
        name: "",
        image: "",
        estimated_diameter: 0,
        is_potentially_hazardous: "",
        close_approach_date: "",
        miles_per_hour: 0,
        orbiting_body: ""
    })


    // this use affect will only run if nearEarthOjectId changes
    useEffect(() => {
        // if the nearEarthOjectId is not null then the game that comes back, then setCurrentNearEarthObject 
        if(nearEarthObjectId != null) {
            getNearEarthObjectById(nearEarthObjectId).then(nearEarthObject => {
                setCurrentEvent({
                    neo_reference: nearEarthObject.neo_reference,
                    name: nearEarthObject.name,
                    image: nearEarthObject.image,
                    estimated_diameter: nearEarthObject.estimated_diameter,
                    is_potentially_hazardous: nearEarthObject.is_potentially_hazardous,
                    close_approach_date: nearEarthObject.close_approach_date,
                    miles_per_hour: nearEarthObject.miles_per_hour,
                    orbiting_body: nearEarthObject.orbiting_body
                })
        })
    }
    }, [nearEarthObjectId])


    // const changeNeoState = (event, currentNearEarthObject, SetCurrentNearEarthObject) => {
    //     const newNeoState = { ...currentNearEarthObject }
    //     newNeoState = event.target.value
    //     SetCurrentNearEarthObject(newNeoState)
    // }

    const changeNameState = (event) => {
        const newNeoState = { ...currentEvent }
        newNeoState.name = event.target.value
        setCurrentEvent(newNeoState)
    }

    const changeImageState = (event) => {
        const newNeoState = { ...currentEvent }
        newNeoState.image = event.target.value
        setCurrentEvent(newNeoState)
    }

    const changeEstimatedDiameterState = (event) => {
        const newNeoState = { ...currentEvent }
        newNeoState.estimated_diameter = event.target.value
        setCurrentEvent(newNeoState)
    }

    const changeHazardousState = (event) => {
        const newNeoState = { ...currentEvent }
        newNeoState.is_potentially_hazardous = event.target.value
        setCurrentEvent(newNeoState)
    }

        const changeCloseApproachtDate = (event) => {
        const newNeoState = { ...currentEvent }
        newNeoState.close_approach_date = event.target.value
        setCurrentEvent(newNeoState)
    }

        const changeMilesPerHourState = (event) => {
        const newNeoState = { ...currentEvent }
        newNeoState.miles_per_hour = event.target.value
        setCurrentEvent(newNeoState)
    }

        const changeOrbitingBodyState = (event) => {
        const newNeoState = { ...currentEvent }
        newNeoState.orbiting_body = event.target.value
        setCurrentEvent(newNeoState)
    }

    return (
            <form className="nearEarthOjectForm">
                <h2 className="nearEarthOjectForm__title">Create New Near Earth Object</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            value={currentEvent.name}
                            onChange={changeNameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="image">Image: </label>
                        <input type="image" name="image" required autoFocus className="form-control"
                            value={currentEvent.image}
                            onChange={changeImageState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="estimated_diameter">Estimated Diameter: </label>
                        <input type="text" name="estimated_diameter" required autoFocus className="form-control"
                            value={currentEvent.estimated_diameter}
                            onChange={changeEstimatedDiameterState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="is_potentially_hazardous">Potentially Dangerous </label>
                        <input type="checkbox" name="is_potentially_hazardous" required autoFocus className="form-control"
                            value={currentEvent.is_potentially_hazardous}
                            onChange={changeHazardousState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="close_approach_date">Close Approach Date: </label>
                        <input type="date" name="close_approach_date" required autoFocus className="form-control"
                            value={currentEvent.close_approach_date}
                            onChange={changeCloseApproachtDate}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="miles_per_hour">Miles Per Hour: </label>
                        <input type="text" name="miles_per_hour" required autoFocus className="form-control"
                            value={currentEvent.miles_per_hour}
                            onChange={changeMilesPerHourState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="orbiting_body">Orbiting Body: </label>
                        <input type="text" name="orbiting_body" required autoFocus className="form-control"
                            value={currentEvent.orbiting_body}
                            onChange={changeOrbitingBodyState}
                        />
                    </div>
                </fieldset>

            <button type="submit"

                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const nearEarthObject = {
                        neo_reference: parseInt(currentEvent.neo_reference),
                        name: currentEvent.name,
                        image: currentEvent.image,
                        estimated_diameter: parseInt(currentEvent.estimated_diameter),
                        is_potentially_hazardous: currentEvent.is_potentially_hazardous,
                        close_approach_date: currentEvent.close_approach_date,
                        miles_per_hour: parseInt(currentEvent.miles_per_hour),
                        orbiting_body: currentEvent.orbiting_body
                    }
                    console.log(nearEarthObject, "nearEathObject")
                    if (nearEarthObjectId) {
                        nearEarthObject.id = nearEarthObjectId
                        updateNearEarthObject(nearEarthObject).then(() => history.push("/nearearthobjects")
                        )
                    } else {
                        createNearEarthObject(nearEarthObject)
                        .then(() => history.push("/nearearthobjects"))
                }}
            }
            className="btn btn-primary">{nearEarthObjectId?"Save":"Create"}</button>
    </form> 
    )
}