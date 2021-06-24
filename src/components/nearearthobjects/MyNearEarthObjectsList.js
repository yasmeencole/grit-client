import React, { useContext, useEffect } from "react"
import { NearEarthObjectContext } from "./NearEarthObjectProvider.js"
import { useHistory } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"



export const MyNearEarthObjectList = (props) => {
    const { nearEarthObjects, getNearEarthObjects, getMyNearEarthObjects } = useContext(NearEarthObjectContext)
    const history = useHistory();


    useEffect(() => {
        getMyNearEarthObjects()
    }, [])

    return (
        <>
            <header className="nearEarthObjects__header">
            <h1>Near Earth Objects</h1>
        </header>
        <Button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                history.push({ pathname: "/nearearthobjects/new" })
            }}
            >Create New Near Earth Object
        </Button>
        <article className="nearEarthObjects">
            {
                nearEarthObjects.map(nearEarthObject => {
                    return <section key={`nearEarthObject--${nearEarthObject.id}`} className="nearEarthObject">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nearEarthObject.image} />
                            <Card.Body>
                                <Card.Title>Name: {nearEarthObject.name}</Card.Title>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text> */}
                                {/* <Button variant="primary">Go somewhere</Button> */}
                                {/* <Button className="food__newFoodButton"onClick={() => { history.push("/nearearthobjects/:nearearthobjectId/detail") }}>NEO Detail</Button> */}
                                <Link to={`/nearearthobjects/detail/${nearEarthObject.id}`}>
                                    <Button>
                                        Details
                                    </Button>
                                </Link>
                            </Card.Body>
                            </Card>
                    </section>

                })
            }
        </article>
        </>
    )
}

