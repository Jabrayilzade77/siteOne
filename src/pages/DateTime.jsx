import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DateTime() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const hours = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const nextPage = () => {
    if (!date || !time) {
      alert("Tarix və saat seç!");
      return;
    }

    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    navigate("/location");
  };

  return (
    <div className="container">
      <h1>📅 Nə vaxt görüşək?</h1>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <h2 className="timeTitle">
        ⏰ Saat seç
      </h2>

      <div className="timeContainer">
        {hours.map((hour) => (
          <button
            key={hour}
            className={
              time === hour
                ? "timeBtn activeTime"
                : "timeBtn"
            }
            onClick={() => setTime(hour)}
          >
            {hour}
          </button>
        ))}
      </div>

      <button
        className="yesBtn"
        onClick={nextPage}
      >
        Davam et ❤️
      </button>
    </div>
  );
}

export default DateTime;