import classes from "./Home.module.css";
import WeatherWidget from "../../ui/weather-widget/WeatherWidget";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Home({ weatherData, cityName }) {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  //

  //
  const API_URL = weatherData.API_URL;
  const API_KEY = weatherData.API_KEY;
  //

  const searchChangeHandler = (inputValue) => {
    const [latitude, longitude] = inputValue.value.split(" ");

    const weahter = fetch(
      `${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));

    const forecast = fetch(
      `${API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setForecast(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className={classes.home}>
      <div className={classes.input}>
        <SearchBar cityName={cityName} onSearchChange={searchChangeHandler} />
      </div>
      <div className={classes.widget}>
        {data && <WeatherWidget weahter={data} forecast={forecast} />}
      </div>
      <div className={classes["main-img"]}>
        <img
          src="https://www.pixel4k.com/wp-content/uploads/2019/06/new-york-empire-street-building_1560535798.jpg"
          alt="wallpaper"
        />
      </div>
    </section>
  );
}

export default Home;
