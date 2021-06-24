import React, { useState } from "react"

export const NearEarthObjectContext = React.createContext()

export const NearEarthObjectProvider = (props) => {
    const [ nearEarthObjects, setNearEarthObjects ] = useState([])


    const getNearEarthObjects = () => {
        return fetch("http://localhost:8000/nearearthobjects", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("grit_token")}`
            }
        })
            .then(response => response.json())
            .then(setNearEarthObjects)
    }

    const getMyNearEarthObjects = () => {
        return fetch("http://localhost:8000/nearearthobjects?user=me", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("grit_token")}`
            }
        })
            .then(response => response.json())
            .then(setNearEarthObjects)
    }

    const createNearEarthObject = (nearEarthObject) => {
        return fetch("http://localhost:8000/nearearthobjects", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("grit_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nearEarthObject)
        })
            .then(response => response.json())
    }

    const getNearEarthObjectById = (id) => {
        return fetch(`http://localhost:8000/nearearthobjects/${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("grit_token")}`
            }
        })
            .then(response => response.json())
    }

    const updateNearEarthObject = nearearthobject => {
        return fetch(`http://localhost:8000/nearearthobjects/${nearearthobject.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("grit_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nearearthobject)
        })
            .then(getNearEarthObjects)
        }
        const deleteNearEarthObject = nearEarthObjectId => {
            return fetch(`http://localhost:8000/nearearthobjects/${ nearEarthObjectId }`, {
                method: "DELETE",
                headers:{
                    "Authorization": `Token ${localStorage.getItem("grit_token")}`
                }
            })
                .then(getNearEarthObjects)
        }

    return (
        <NearEarthObjectContext.Provider value={{ nearEarthObjects, getNearEarthObjects, getMyNearEarthObjects, createNearEarthObject, getNearEarthObjectById, updateNearEarthObject, deleteNearEarthObject }} >
            { props.children }
        </NearEarthObjectContext.Provider>
    )
}