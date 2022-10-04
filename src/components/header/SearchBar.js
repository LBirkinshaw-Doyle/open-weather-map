import { useEffect, useState } from 'react';

import './SearchBar.css';
import searchIcon from '../media/ui-icons/search.png';

function SearchBar(props) {
  const [location, updateLocation] = useState('');

  //Update state:location on component load and if the props change
  useEffect(() => {
    updateLocation(props.data.searchLocation);
  }, [props.data.searchLocation]);

  //Handle input to search bar
  const handleLocationChange = (event) => {
    event.preventDefault();
    updateLocation(event.target.value);
  };

  //Handle form submission and pass data back to App Component
  const handleSubmit = (event) => {
    event.preventDefault();
    if (location.length !== 0) {
      props.updateData({ searchLocation: location });
    }
  };

  return (
    <div id="search-bar">
      <form onSubmit={handleSubmit}>
        <label id="location-label">
          Search for a location:
          <input
            id="location"
            type="text"
            placeholder="London"
            name="location"
            value={location}
            onChange={handleLocationChange}
          ></input>
        </label>
        <button id="submit" type="submit">
          <img src={searchIcon} alt="search" width="40" height="40"></img>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
