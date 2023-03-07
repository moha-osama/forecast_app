import classes from "./News.module.css";

import SecHeader from "../../ui/sec-header/SecHeader";
import NewsItem from "./NewsItem";
import Aside from "./Aside";

function News({ news }) {
  let laodedNews = [];

  for (const key in news) {
    laodedNews.push({
      id: key,
      title: news[key].title,
      info: news[key].info,
      image: news[key].image,
    });
  }

  return (
    <section className={classes["news-page"]}>
      <div className={classes.header}>
        <SecHeader to="News" />
      </div>
      <div className={classes.body}>
        <div className={classes.main}>
          {laodedNews.map((item) => (
            <NewsItem
              id={item.id}
              key={item.id}
              title={item.title}
              info={item.info}
              image={item.image}
            />
          ))}
        </div>
        <div className={classes.aside}>
          <Aside />
        </div>
      </div>
    </section>
  );
}

export default News;
