import { json, defer, Await, useLoaderData } from "react-router-dom";
import LiveCameras from "../component/live-cameras/LiveCameras";

function LiveCamerasPage() {
  const { cities } = useLoaderData();

  return (
    <>
      <Await resolve={cities}>
        {(loadedCiities) => <LiveCameras cities={loadedCiities} />}
      </Await>
    </>
  );
}

export default LiveCamerasPage;

async function laodNews() {
  const response = await fetch("${firebase_db}/live-cameras.json");
  if (!response.ok) {
    throw json({ message: "Can't Load Data" }, { status: 500 });
  } else {
    const newsData = await response.json();
    return newsData;
  }
}

export async function loader() {
  return defer({ cities: await laodNews() });
}
