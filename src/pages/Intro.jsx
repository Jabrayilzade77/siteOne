import { useState } from "react";
import { useNavigate } from "react-router-dom";
import girlImage from "../assets/mahira.png";

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

          <h2>
            Sənin üçün məktub var
          </h2>

          <p>
            Açmaq üçün klik et ❤️
          </p>
        </>
      ) : (
        <div className="openedContent">
          <img
            src={girlImage}
            alt=""
            className="girlImage"
          />

          <h2>
            Bir sualım var...
          </h2>

          <button
            className="yesBtn"
            onClick={() => navigate("/home")}
          >
            Davam et ❤️
          </button>
        </div>
      )}
    </div>
  );
}

export default Intro;