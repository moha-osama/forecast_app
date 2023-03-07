import L from "leaflet";

const icon = new L.icon({
  iconUrl: require("../../img/marker.png"),
  iconSize: new L.Point(50, 50),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export { icon };
