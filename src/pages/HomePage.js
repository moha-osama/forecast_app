import { useLoaderData, defer, Await } from "react-router-dom";
import Home from "../component/home/Home";
import { Suspense } from "react";

function HomePage() {
  const { weather, cityName } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Await resolve={weather}>
        {(loadWeather) => (
          <Home weatherData={loadWeather} cityName={cityName} />
        )}
      </Await>
    </Suspense>
  );
}

export default HomePage;

async function loadWeatherData() {
  const API_KEY = `${API_KEY}`;
  const API_URL = `${API_URL}`;

  return { API_URL, API_KEY };
}

async function loadCititesData() {
  const API_URL = "${API_URL}/v1/geo";
  const options = {
    method: "GET",
    headers: {
      `${headers}`,
    },
  };
  return { API_URL, options };
}

export async function loader() {
  return defer({
    weather: await loadWeatherData(),
    cityName: await loadCititesData(),
  });
}
