import React, { useContext, useEffect } from "react"
import { NearEarthObjectContext } from "./NearEarthObjectProvider.js"
import { useHistory } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const NearEarthObjectList = (props) => {
    const { nearEarthObjects, getNearEarthObjects } = useContext(NearEarthObjectContext)
    const history = useHistory();


    useEffect(() => {
        getNearEarthObjects()
    }, [])

    return (
        
        <article className="nearEarthObjects">
            {
                nearEarthObjects.map(nearEarthObject => {
                    return <section key={`nearEarthObject--${nearEarthObject.id}`} className="nearEarthObject">
                        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Name: {nearEarthObject.name}</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    {/* <Button variant="primary">Go somewhere</Button> */}
    <Button className="food__newFoodButton"onClick={() => { history.push("/nearearthobjects/:nearearthobjectId/detail") }}>NEO Detail</Button>

  </Card.Body>
</Card>

                    </section>

                })
            }
        </article>
    )
}

