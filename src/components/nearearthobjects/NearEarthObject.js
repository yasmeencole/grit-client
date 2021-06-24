import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"
import "./NearEarthObject.css"
import "bootstrap/dist/css/bootstrap.min.css";


// nearEarthObject card that appears for route http://localhost:3000/nearEarthObject contains: image, food name 
// and details button


// {nearEarthObject} is a prop/parameter
/*
props are how we pass state from component to component. Props can be deconstructed with
{curly brackets} and passed down to the child components 
*/
export const NearEarthObject = ({nearEarthObject}) => {
    return (
        <>
        <article className="nearEarthObjects">
            <Card style={{ width: '20rem' }}>
            <Card.Img className="card-img" variant="top" src={nearEarthObject?.image} style={{ width: '20rem', height:'17rem' }}></Card.Img>
            {console.log(nearEarthObject)}
            <Card.Body>
                <Card.Title> {nearEarthObject?.name}</Card.Title>
                <Card.Text>
                {/* {nearEarthObject?.name} */}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                {/* <Button className="nearEarth__detailButton"onClick={() => { history.push("/nearearthobjects/detail/${}") }}>NEO Detail</Button> */}
                <Link to={`/nearearthobjects/detail/${nearEarthObject?.id}`}>
                    <Button className="btn btn-warning" >
                        Details
                    </Button>
                </Link>
            </Card.Body>
            </Card>
        </article>
        </>        
)
}