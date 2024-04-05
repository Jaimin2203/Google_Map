import React, { useState } from 'react'
import { GoogleMap, google, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100vh',
}

const center = {
  lat: 40.7128,
  lng: -74.0060,
}

const Map = () => {
  const [directions, setDirections] = useState(null)

  const directionsService = new google.maps.DirectionsService()

  const handleDirectionsCalculated = (response, status) => {
    if (status === 'OK') {
      setDirections(response)
    }
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <DirectionsService
          options={{
            destination: { lat: 40.7128, lng: -74.0060 },
            origin: { lat: 41.8781, lng: -87.6298 },
            travelMode: 'DRIVING',
          }}
          callback={handleDirectionsCalculated}
        />
        {
          directions && (
            <DirectionsRenderer
              directions={directions}
            />
          )
        }
      </GoogleMap>
    </LoadScript>
  )
}

export default Map