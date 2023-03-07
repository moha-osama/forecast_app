import classes from "./Foreacast.module.css";

const Forecast = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let loadForecast = [];

  for (let i = 5; i < data.list.length; i++) {
    if (i % 8 === 0) {
      loadForecast.push(data.list[i]);
    }
  }

  function getDayName(date_formula) {
    const date = new Date(date_formula);
    let dayName = days[date.getDay()];
    return dayName;
  }

  return (
    <nav className={classes.forecast}>
      <ul>
        {loadForecast.map((item) => (
          <li key={item.dt}>
            <h3>{getDayName(item.dt_txt)}</h3>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="condition"
            />
            <h2>{`${(item.main.temp_max - 273.5).toFixed(0)}°C`}</h2>
            <h3>{`${(item.main.temp_min - 273.5).toFixed(0)}°`}</h3>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Forecast;
