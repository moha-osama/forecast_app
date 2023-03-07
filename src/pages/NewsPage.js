import { Await, defer, json, useLoaderData } from "react-router";
import News from "../component/news/News";

function NewsPage() {
  const { news } = useLoaderData();

  return (
    <Await resolve={news}>
      {(loadNewsData) => <News news={loadNewsData} />}
    </Await>
  );
}

export default NewsPage;

async function laodNews() {
  const response = await fetch("${fireabase_db}/news.json");
  if (!response.ok) {
    throw json({ message: "Can't Load Data" }, { status: 500 });
  } else {
    const newsData = await response.json();
    return newsData;
  }
}

export async function loader() {
  return defer({ news: await laodNews() });
}
