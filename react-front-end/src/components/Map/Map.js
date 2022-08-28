import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import '../../styles/map.css'

const Map = (props) => {
  return (

    <div className='map'>
    <GoogleMapReact 
      bootstrapURLKeys = {{key: "AIzaSyDvv-ZvZZ0lRK-QlkG5w0XG8dCxHKgIoa8"}}
      defaultCenter = {props.value}
      defaultZoom = {16}
    >        
    <LocationMarker lat = {props.value.lat} lng ={props.value.lng}/>
    </GoogleMapReact>
    
  </div>
  )

}

export default Map