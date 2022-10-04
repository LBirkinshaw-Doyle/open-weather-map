import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import RecenterMapOnSearch from './RecenterMap';
import WeatherSymbol from './WeatherSymbol';

import './MainBody.css';

function MainBody(props) {
  const [center] = useState([54.003, -2.544]);

  return (
    <div id="main-body">
      <MapContainer center={center} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RecenterMapOnSearch data={props.data} />
        <WeatherSymbol />
      </MapContainer>
    </div>
  );
}

export default MainBody;
