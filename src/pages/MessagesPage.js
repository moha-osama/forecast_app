import { Await, defer, useLoaderData } from "react-router-dom";
import Messages from "../component/admin/Messages";

const MessagesPage = () => {
  const { messages } = useLoaderData();
  return (
    <Await resolve={messages}>
      {(loadMessages) => <Messages data={loadMessages} />}
    </Await>
  );
};

export default MessagesPage;

async function loadMessages() {
  const response = await fetch("${firebase_db}/messages.json");
  const data = await response.json();
  return data;
}

export async function loader() {
  return defer({
    messages: await loadMessages(),
  });
}
