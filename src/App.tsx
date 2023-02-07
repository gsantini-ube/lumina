import { useEffect, useState } from "react";
import "./App.css";
import HoloImg from "./assets/backgrounds/holo.png";
import SpinnerImg from "./assets/images/spinner.svg";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = HoloImg;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className={`App ${imageLoaded && "background"}`}>
      {imageLoaded ? (
        <>
          <span className="title">Lumina</span>
          <span className="subtitle">DEX</span>
          <span className="description">
            Fully compliant, enterprise-ready, decentralized exchange on Mina
          </span>
        </>
      ) : (
        <img src={SpinnerImg} alt="" />
      )}
    </div>
  );
}

export default App;
