import { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import MainBody from './components/main/MainBody';

function App() {
  const [data, updateData] = useState({ searchLocation: '' });
  return (
    <div id="App">
      <Header data={data} updateData={updateData} />
      <MainBody data={data} />
    </div>
  );
}

export default App;
