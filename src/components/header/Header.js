import AppName from './AppName';
import SearchBar from './SearchBar';

import './Header.css';

function Header(props) {
  return (
    <div id="header">
      <AppName />
      <SearchBar data={props.data} updateData={props.updateData} />
    </div>
  );
}

export default Header;
