import { logos_1x as logos } from '../logos';

function LogoDisplay() {
  return (
    <div id="logo">
      <img
        src={logos.logo01_1x}
        alt="sunny"
        className="logo active slide-in"
      ></img>
      <img
        src={logos.logo02_1x}
        alt="few clouds"
        className="logo inactive"
      ></img>
      <img
        src={logos.logo03_1x}
        alt="scattered clouds"
        className="logo inactive"
      ></img>
      <img src={logos.logo04_1x} alt="cloudy" className="logo inactive"></img>
      <img
        src={logos.logo09_1x}
        alt="light rain"
        className="logo inactive"
      ></img>
      <img src={logos.logo10_1x} alt="rain" className="logo inactive"></img>
      <img src={logos.logo11_1x} alt="storm" className="logo inactive"></img>
      <img src={logos.logo13_1x} alt="snow" className="logo inactive"></img>
      <img src={logos.logo50_1x} alt="mist" className="logo inactive"></img>
    </div>
  );
}

export default LogoDisplay;
