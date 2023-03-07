import { Await, defer, useLoaderData } from "react-router-dom";
import Subscriptions from "../component/admin/Subscriptions";

const SubscriptionsPage = () => {
  const { subscriptions } = useLoaderData();

  return (
    <Await resolve={subscriptions}>
      {(loadSus) => <Subscriptions data={loadSus} />}
    </Await>
  );
};

export default SubscriptionsPage;

export async function subscriptionsLoader() {
  const response = await fetch("${firebase_db}/subscriptions.json");
  const data = response.json();
  return data;
}

export async function loader() {
  return defer({ subscriptions: await subscriptionsLoader() });
}
