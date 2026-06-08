import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");

  const finish = () => {
    localStorage.setItem("location", location);
    navigate("/result");
  };

  return (
    <div className="container">
      <h1>📍 Harada görüşək?</h1>

      <select
        onChange={(e) =>
          setLocation(e.target.value)
        }
      >
        <option value="">
          Məkan seç
        </option>

        <option>Bulvar 🌊</option>
        <option>KFC 🍗</option>
        <option>Sumqayıt Atraksion 🎡</option>
        <option>Coffee Shop ☕</option>
        <option>Cinema 🎬</option>
        <option>Park 🌳</option>
      </select>

      <button
        className="yesBtn"
        onClick={finish}
      >
        Görüşü Təyin Et ❤️
      </button>
    </div>
  );
}

export default Location;
