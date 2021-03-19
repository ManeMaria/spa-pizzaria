import React from 'react';
import { useGoogleMaps } from "react-hook-google-maps";

import { Container } from './styles';

function Location() {
 
    const recife =  { lat: -8.06288683621007, lng: -34.8711344959675240}
    const { ref, map, google } = useGoogleMaps(
      // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
      'AIzaSyDYD9uoyTUowcsDzD-ocVI2XS8rDEmEMOk',
      // NOTE: even if you change options later
      {
        center: recife,
        zoom: 20,
      },
    );
      if(map){
        new google.maps.Marker({ position: recife, map });
       }
    console.log(map);
    console.log(google);

  return (
      <Container ref= {ref} >
       
      </Container>
  )
}
export default  Location;