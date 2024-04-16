import vhLogo from '/vhlogofinal.svg';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./WebsiteHeader.css";

const LocationAPIKey = "enter_api_key";

export default function WebsiteHeader() {

    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
      getCoordinates();
    }, []);

    function getLocationInfo(latitude, longitude) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${LocationAPIKey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status.code === 200) {
            console.log("results:", data.results);
            setUserLocation(data.results[0].components.city + ", " + data.results[0].components.state_code);
          } else {
            setUserLocation("Unknown Location");
            console.log("Reverse geolocation request failed.");
          }
        })
        .catch((error) => console.error(error));
      };

    const getCoordinates = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getLocationInfo(latitude, longitude);
          },
          (error) => {
            setUserLocation("Unknown Location");
            console.error("Error getting user location: ", error);
          }
        );
      }
      else {
        setUserLocation("Unknown Location");
        console.log("Geolocation is not supported by this browser.");
      }
    };

    return (
        <div className="header">
          <Link to="/">
            <img src={vhLogo} className="logo" alt="VH Logo" />
          </Link>
          <span className="locationTag">{userLocation}</span>
        </div>
    )
};