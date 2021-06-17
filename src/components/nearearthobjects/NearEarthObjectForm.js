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
    const [currentNearEarthObject, setCurrentNearEarthObject] = useState({
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
                setCurrentNearEarthObject({
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


    const changeNeoState = (event, currentNearEarthObject, etCurrentNearEarthObject) => {
        const newNeoState = { ...currentNearEarthObject }
        newNeoState = event.target.value
        etCurrentNearEarthObject(newNeoState)
    }

    // const changeGameMakerState = (event) => {
    //     const newGameState = { ...currentGame }
    //     newGameState.maker = event.target.value
    //     setCurrentGame(newGameState)
    // }

    // const changeGamePlayersState = (event) => {
    //     const newGameState = { ...currentGame }
    //     newGameState.number_of_players = event.target.value
    //     setCurrentGame(newGameState)
    // }

    // const changeGameSkillLevelState = (event) => {
    //     const newGameState = { ...currentGame }
    //     newGameState.skill_level = event.target.value
    //     setCurrentGame(newGameState)
    // }

    // const changeGameTypeState = (event) => {
    //     const newGameState = { ...currentGame }
    //     newGameState.game_type_id = event.target.value
    //     setCurrentGame(newGameState)
    // }


    return (
            <form className="nearEarthOjectForm">
                <h2 className="nearEarthOjectForm__title">Create New Near Earth Object</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            value={currentNearEarthObject.name}
                            onChange={changeNeoState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="image">Image: </label>
                        <input type="image" name="image" required autoFocus className="form-control"
                            value={currentNearEarthObject.image}
                            onChange={changeNeoState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="estimated_diameter">Estimated Diameter: </label>
                        <input type="text" name="estimated_diameter" required autoFocus className="form-control"
                            value={currentNearEarthObject.estimated_diameter}
                            onChange={changeNeoState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="is_potentially_hazardous">Potentially Dangerous </label>
                        <input type="checkbox" name="is_potentially_hazardous" required autoFocus className="form-control"
                            value={currentNearEarthObject.is_potentially_hazardous}
                            onChange={changeNeoState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="close_approach_date">Close Approach Date: </label>
                        <input type="date" name="close_approach_date" required autoFocus className="form-control"
                            value={currentNearEarthObject.close_approach_date}
                            onChange={changeNeoState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="miles_per_hour">Miles Per Hour: </label>
                        <input type="text" name="miles_per_hour" required autoFocus className="form-control"
                            value={currentNearEarthObject.miles_per_hour}
                            onChange={changeNeoState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="orbiting_body">Orbiting Body: </label>
                        <input type="text" name="orbiting_body" required autoFocus className="form-control"
                            value={currentNearEarthObject.orbiting_body}
                            onChange={changeNeoState}
                        />
                    </div>
                </fieldset>

            <button type="submit"

                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const nearEarthObject = {
                        neo_reference: parseInt(currentNearEarthObject.neo_reference),
                        name: currentNearEarthObject.name,
                        image: currentNearEarthObject.image,
                        estimated_diameter: parseInt(currentNearEarthObject.estimated_diameter),
                        is_potentially_hazardous: currentNearEarthObject.is_potentially_hazardous,
                        close_approach_date: currentNearEarthObject.close_approach_date,
                        miles_per_hour: parseInt(currentNearEarthObject.miles_per_hour),
                        orbiting_body: currentNearEarthObject.orbiting_body
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