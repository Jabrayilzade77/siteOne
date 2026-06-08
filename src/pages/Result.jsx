import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function Result() {
  const sent = useRef(false);

  const date = localStorage.getItem("date");
  const time = localStorage.getItem("time");
  const location = localStorage.getItem("location");

  useEffect(() => {
    if (sent.current) return;

    sent.current = true;

    emailjs
      .send(
        "service_9ztuzog",
        "template_lwp8cfj",
        {
          date,
          time,
          location,
        },
        "_Yl36KQzmV4vPiajC"
      )
      .then(() => {
        console.log("Email göndərildi");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [date, time, location]);

  return (
    <div className="container">
      <div className="resultCard">
        <h1>🎉 Görüş Təyin Edildi ❤️</h1>

        <h2>📅 {date}</h2>

        <h2>⏰ {time}</h2>

        <h2>📍 {location}</h2>

        <p>
          Səni səbirsizliklə gözləyirəm ❤️
        </p>
      </div>
    </div>
  );
}

export default Result;