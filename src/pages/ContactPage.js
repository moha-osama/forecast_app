import Contact from "../component/contact/Contact";
import { defer, useLoaderData, useActionData } from "react-router-dom";

function ContactPage() {
  const data = useLoaderData();
  const action = useActionData();

  return <Contact data={data} method="POST" actionData={action} />;
}

export default ContactPage;

function loadMap() {
  const maptiler = {
    url: `${map_url}`,
    attribution: `${map_attribution}`,
  };
  return maptiler;
}

export async function loader() {
  return defer({ data: loadMap() });
}
