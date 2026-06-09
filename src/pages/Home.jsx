import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [position, setPosition] = useState({
    left: "60%",
    top: "55%",
  });

  const moveButton = () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;

    setPosition({
      left: `${x}%`,
      top: `${y}%`,
    });
  };

  return (
    <div className="container">
      <h1>Mənimlə görüşmək istəyirsən? ❤️</h1>

      <p className="subtitle">
        Bu sualın yalnız bir düzgün cavabı var 😌
      </p>

      <button
        className="yesBtn"
        onClick={() => navigate("/datetime")}
      >
        Hə 😍
      </button>

    <button
  className="noBtn"
  style={position}
  onMouseEnter={moveButton}
  onTouchStart={moveButton}
>
  Yox 😒
</button>
    </div>
  );
}

export default Home;