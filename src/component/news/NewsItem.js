import { Link } from "react-router-dom";
import classes from "./NewsItem.module.css";
import Button from "../../ui/Button/Button";

function NewsItem(props) {
  return (
    <div className={classes["new-item"]}>
      <h2>{props.title}</h2>
      <div className={classes["img-box"]}>
        <img src={props.image} alt="img" />
      </div>
      <Link to={`/news/${props.id}`}>
        <Button type="Read More" />
      </Link>
    </div>
  );
}

export default NewsItem;
