import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet';

const RecenterMapOnSearch = (props) => {
  const map = useMap();
  const [coords, updateCoords] = useState(map.getCenter());

  //Update state:coords on component load and if the props change
  useEffect(() => {
    if (props.data.searchLocation !== '') {
      getCoordinates(props.data.searchLocation);
    }
  }, [props.data.searchLocation]);

  //getCoordinates(loc);

  const getCoordinates = async function (location) {
    const APIkey = '4de205c68a9087dbe53c3386a6f2599a';
    const limit = '1';
    let APIURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location},GB&limit=${limit}&appid=${APIkey}`;
    try {
      const response = await fetch(APIURL);
      const responseData = await response.json();
      const lat = responseData[0].lat;
      const lon = responseData[0].lon;
      updateCoords([lat, lon]);
    } catch (error) {
      //If error in fetching the coords, don't update state & log the error
      console.error(error);
    }
  };
  //When state:coords is updated, flyTo those new coords
  useEffect(() => {
    map.flyTo(coords, map.getZoom());
  }, [coords, map]);

  return null;
};

export default RecenterMapOnSearch;
