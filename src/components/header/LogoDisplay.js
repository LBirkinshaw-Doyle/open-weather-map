import { useEffect, useState } from 'react';
import { logos_1x as logos } from '../logos';
import './LogoDisplay.css';

function LogoDisplay() {
  const [logoIndex, updateLogoIndex] = useState(0);
  const [logoArray] = useState(Object.values(logos));

  useEffect(() => {
    const AnimateLogoInterval = setInterval(animateLogo, 10000);
    function animateLogo(logoImages) {
      const randomIndex = Math.floor(Math.random() * 9);
      updateLogoIndex(randomIndex);
    }
    return () => clearInterval(AnimateLogoInterval);
  });

  return (
    <div id="logo">
      <img
        src={logoArray[logoIndex]}
        className="logo slide-in"
        alt=""
        key={logoIndex}
      ></img>
    </div>
  );
}

export default LogoDisplay;
