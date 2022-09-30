import { useState } from 'react';

function SearchBar() {
  const [location, updateLocation] = useState('');
  const [storageError, updateStorageError] = useState(false);
  const handleLocationChange = (event) => {
    event.preventDefault();
    updateLocation(event.target.value);
  };
  function storageAvailable() {
    let storage;
    try {
      storage = window['localStorage'];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (location.length !== 0) {
      if (storageAvailable()) {
        // We can use localStorage
        let storage = window['localStorage'];
        storage.setItem('location', location);
      } else {
        updateStorageError(true);
      }
    }
  };
  function SearchForm() {
    return (
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
        <input type="submit" value="Search"></input>
      </form>
    );
  }
  return (
    <div id="search-bar">
      {storageError && <p>Search Unavailable</p>}
      {!storageError && SearchForm()}
    </div>
  );
}

export default SearchBar;
