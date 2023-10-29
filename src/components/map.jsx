/* eslint-disable no-unused-vars */
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
  width:'auto',
  height:'400px',
  margin:'auto'
};

const center = {
  lat: parseFloat(localStorage.getItem('lat')),
  lng: parseFloat(localStorage.getItem('lng'))
};
function Map() {

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyCx0wq_NY0cy99XoWDBtiSR-VAUm3dUmWI"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
    const [markers, setMarkers] = React.useState([]);

    const onMapClick = (e) => {
        setMarkers((current) => [
          ...current,
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        ]);
      };
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={13}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
       >
        {markers.map((marker, index) => (
        <Marker 
        key={index}
          position={{ 
            lat: marker.lat,
            lng: marker.lng 
          }} />
    ))}
      </GoogleMap>
    ) : (
      <></>
    );
  }
export default Map; 


