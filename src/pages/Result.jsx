function Result() {
  const date = localStorage.getItem("date");
  const time = localStorage.getItem("time");
  const location =
    localStorage.getItem("location");

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
