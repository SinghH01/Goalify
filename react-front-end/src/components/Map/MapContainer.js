import React, {useState} from 'react';
import Geocode from "react-geocode";
import Map from './Map';

function MapContainer(props) {


  const [lat, setLat] = useState(undefined);
  const [lng, setLng] = useState(undefined);

  Geocode.setApiKey("AIzaSyDlzphQTYQUKCPWteVktSdBUU0RiLGYRww");
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

function getGeo() {
  let location = props.location
  Geocode.fromAddress(location).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLat(lat);
      setLng(lng);
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
}

let value = {
    lat: lat,
    lng: lng
  }

getGeo();
  return (
    <div >
       {lat !== undefined && lng !== undefined && (<Map value = {value}/>)}      
    </div>
  );
}

export default MapContainer;
