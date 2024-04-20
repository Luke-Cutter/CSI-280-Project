import React from 'react';
import { Link } from "react-router-dom";
import "./FeaturedCharity.css";

export default function FeaturedCharity(props) {

    return (
        <Link to={props.charityLink}>
            <img src={props.charityImg} className="featured"></img>
        </Link>
    )
};
