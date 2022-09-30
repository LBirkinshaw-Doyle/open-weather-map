import AppName from './AppName';
import SearchBar from './SearchBar';

import './Header.css';

function Header() {
  return (
    <div id="header">
      <AppName />
      <SearchBar />
    </div>
  );
}

export default Header;
