import classes from "./MapCard.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { icon } from "./GetIcon";

function MapCard({ data }) {
  const [center, setCenter] = useState({ lat: 30.033333, lng: 31.233334 });
  const ZOOM_LEVEL = 15;

  return (
    <div className={classes.area}>
      <MapContainer className={classes.map} center={center} zoom={ZOOM_LEVEL}>
        <TileLayer url={data.data.url} />
        <Marker position={center} icon={icon}></Marker>
      </MapContainer>
      <div className={classes["contact-info"]}>
        <div className={`${classes.first} ${classes.container}`}>
          <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em">
            <path
              fill="currentColor"
              d="M8 0a5 5 0 00-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 00-5-5zm0 8.063a3.063 3.063 0 110-6.126 3.063 3.063 0 010 6.126zM6.063 5a1.938 1.938 0 113.876 0 1.938 1.938 0 01-3.876 0z"
            />
          </svg>
          <span>
            Company Name INC.
            <br />
            2803 Avenue Street, Los Angeles
          </span>
        </div>
        <div className={classes.container}>
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z" />
          </svg>
          <span>+1 800 314 235</span>
        </div>
        <div className={classes.container}>
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M18.999 2h-14c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4h3.5c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" />
          </svg>
          <span>contact@companyname.com</span>
        </div>
      </div>
    </div>
  );
}

export default MapCard;
