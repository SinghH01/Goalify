import React, {useState} from 'react';
import Geocode from "react-geocode";
import Map from './Map';

function MapContainer(props) {


  const [lat, setLat] = useState(undefined);
  const [lng, setLng] = useState(undefined);

  Geocode.setApiKey("AIzaSyDvv-ZvZZ0lRK-QlkG5w0XG8dCxHKgIoa8");
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
      <h5>{props.location}</h5>
       {lat !== undefined && lng !== undefined && (<Map value = {value}/>)}      
    </div>
  );
}

export default MapContainer;
