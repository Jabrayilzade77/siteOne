import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  return (
    <div className="introContainer">
      {!opened ? (
        <>
          <div
            className="envelope"
            onClick={() => setOpened(true)}
          >
            💌
          </div>

          <h2>Sənin üçün məktub var</h2>
          <p>Açmaq üçün klik et ❤️</p>
        </>
      ) : (
        <div className="butterflyScene">

          {/* Kəpənəklər */}
          <div className="butterfly b1">🦋</div>
          <div className="butterfly b2">🦋</div>
          <div className="butterfly b3">🦋</div>
          <div className="butterfly b4">🦋</div>

          <h2 className="butterflyText">
            Bir sualım var... 🩵
          </h2>

          <button
            className="yesBtn"
            onClick={() => navigate("/home")}
          >
            Davam et
          </button>
        </div>
      )}
    </div>
  );
}

export default Intro;