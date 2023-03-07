import { Await, defer, json, useLoaderData } from "react-router";
import NewsInfo from "../component/news/NewsInfo";

function NewsDetailsPage() {
  const { event } = useLoaderData("new-detail");

  return (
    <>
      <Await resolve={event}>
        {(laodNewData) => <NewsInfo newData={laodNewData} />}
      </Await>
    </>
  );
}

export default NewsDetailsPage;

async function laodEvent(id) {
  const response = await fetch(`${firebase_db}/news/${id}.json`);

  if (!response.ok) {
    throw json({ message: "can not load this new data" }, { status: 500 });
  } else {
    const data = response.json();
    return data;
  }
}

export async function loader({ request, params }) {
  const id = params.newId;
  return defer({ event: await laodEvent(id) });
}
