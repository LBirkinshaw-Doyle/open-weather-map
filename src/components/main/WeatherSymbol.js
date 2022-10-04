import { useEffect, useState } from 'react';
import { Marker, useMap, useMapEvent } from 'react-leaflet';
import Leaflet from 'leaflet';

import { logos_2x as logos } from '../logos';

function WeatherSymbol(props) {
  const [latitudeLongitude, updateLatitudeLongitude] = useState(
    Leaflet.latLng([55, 0])
  );
  const [weatherCode, updateWeatherCode] = useState();

  //create link to the MapContainer Component
  const map = useMap();

  //On creation, move marker position to the map center & update weather code
  useEffect(() => {
    updateLatitudeLongitude(map.getCenter());
  }, [map]);

  //When a move finishes, update the marker position & update weather code
  useMapEvent('moveend', () => {
    updateLatitudeLongitude(map.getCenter());
  });

  //When state:latitudeLongitude is updated, get the weather code for that position
  useEffect(() => {
    getWeatherData(latitudeLongitude.lat, latitudeLongitude.lng);
  }, [latitudeLongitude]);

  //Async function to get the weather data
  const getWeatherData = async function (latitude, longitude) {
    const APIkey = '4de205c68a9087dbe53c3386a6f2599a';
    let APIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`;
    try {
      const response = await fetch(APIURL);
      const responseData = await response.json();
      updateWeatherCode(responseData.weather[0].icon);
    } catch (error) {
      //If error in fetching the coords, don't update state & log the error
      console.error(error);
    }
  };

  //Create a new Icon for the marker, from logos, using the weatherCode
  let weatherLogo;
  switch (weatherCode) {
    case '01d':
      weatherLogo = logos.logo01_2x;
      break;
    case '02d':
      weatherLogo = logos.logo02_2x;
      break;
    case '03d':
      weatherLogo = logos.logo03_2x;
      break;
    case '04d':
      weatherLogo = logos.logo04_2x;
      break;
    case '09d':
      weatherLogo = logos.logo09_2x;
      break;
    case '10d':
      weatherLogo = logos.logo10_2x;
      break;
    case '11d':
      weatherLogo = logos.logo11_2x;
      break;
    case '13d':
      weatherLogo = logos.logo13_2x;
      break;
    case '50d':
      weatherLogo = logos.logo50_2x;
      break;
    default:
      weatherLogo = logos.logo01_2x;
  }
  const weatherIcon = Leaflet.icon({
    iconUrl: weatherLogo,
    iconSize: [100, 100],
    iconAnchor: [50, 100],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  });

  return <Marker icon={weatherIcon} position={latitudeLongitude} />;
}

export default WeatherSymbol;
