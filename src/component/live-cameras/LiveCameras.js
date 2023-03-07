import classes from "./LiveCameras.module.css";
import FilterBar from "../../ui/filter-bar/FilterBar";
import CameraWidget from "../../ui/camera-widget/CameraWidget";
import SecHeader from "../../ui/sec-header/SecHeader";

function LiveCameras({ cities }) {
  let loadedCiities = [];

  for (const key in cities) {
    loadedCiities.push({
      id: key,
      name: cities[key].name,
      image: cities[key].image,
    });
  }

  return (
    <>
      <div className={classes["live-cameras"]}>
        <div className={classes.header}>
          <SecHeader to="Live Cameras" />
          <FilterBar />
        </div>
        <nav className={classes.body}>
          <ul>
            {loadedCiities.map((item) => (
              <li key={item.id}>
                <CameraWidget
                  name={item.name}
                  image={item.image}
                  key={item.id}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default LiveCameras;
