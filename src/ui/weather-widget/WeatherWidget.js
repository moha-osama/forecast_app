import classes from "./WeatherWidget.module.css";

import Forecast from "../forecast/Forecast";

import { RiWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

function WeatherWidget({ weahter, forecast }) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayIndex = new Date().getDay();
  const currDay = days[dayIndex];

  const monthIndex = new Date().getMonth();
  const currMonth = month[monthIndex];

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");

  //

  let countryCode = weahter.sys.country;
  let regionNames = new Intl.DisplayNames(["us"], { type: "region" });
  let countryFullName = regionNames.of(countryCode);
  let tempDegreeInKelvin = weahter.main.temp || 0;
  let tempDegreeIncelsius = (tempDegreeInKelvin - 274.15).toFixed(0);
  let windSpeed = `${weahter.wind.speed.toFixed(0)} Km/h`;
  let humidity = `${weahter.main.humidity}%`;
  let conditionCode = weahter.weather[0].icon;

  return (
    <div className={classes.area}>
      <div className={classes.widget}>
        <div className={classes.date}>
          <p>{currDay}</p>
          <p>{`${dd} ${currMonth}`}</p>
        </div>
        <div className={classes["weather-body"]}>
          <div className={classes["country-name"]}>
            <p>{countryFullName}</p>
          </div>
          <div className={classes["temp-deg"]}>
            <p>{`${tempDegreeIncelsius}°C`}</p>
            <img
              src={`https://openweathermap.org/img/wn/${conditionCode}@2x.png`}
              alt="weather condition"
            />
          </div>
          <div className={classes["info-sec"]}>
            <div className={classes.icon}>
              <span>
                <RiWindyLine />
              </span>
              {windSpeed}
            </div>
            <div className={classes.icon}>
              <span>
                <WiHumidity />
              </span>
              {humidity}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.forecast}>
        {forecast && <Forecast data={forecast} />}
      </div>
      <div className={classes.header}></div>
    </div>
  );
}

export default WeatherWidget;
