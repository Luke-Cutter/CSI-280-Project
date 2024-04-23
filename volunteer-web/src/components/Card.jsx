import { Link } from 'react-router-dom';
import "./Card.css"
{/* This card will be used for charities, events, and jobs.
    If necessary, an enum can specify the design for each card.
    For now they will all have the same design. 
    Props: image, title, overview, color, buttonLink, buttonText   */}

    export default function Card(props) {

        return (
            <div className={props.color + " card"}>
                <img className="card" height="150px" width="150px" src={props.image}></img>
                <div className="inCard">
                    <h4 align="left">{props.title}</h4>
                    <span>{props.overview}</span>
                </div>
                <Link to={props.buttonLink}>
                    <button className="card" >{props.buttonText}</button>
                </Link>
            </div>
        )
    };