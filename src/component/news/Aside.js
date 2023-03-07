import classes from "./Aside.module.css";
import AsideWidget from "../../ui/aside-widget/AsideWidget";

function Aside() {
  const hotNews = [
    "ccusamus dignissimos",
    "Ducimus praesentium",
    "Voluptatum deleniti corrupti",
  ];

  const categories = [
    "Nemo enim ipsam",
    "Voluptatem voluptas",
    "Aspernatur aut odit",
    "Consequuntur magni",
  ];

  return (
    <div className={classes.aside}>
      <AsideWidget title="Hot News" arr={hotNews} />
      <AsideWidget title="Categories" arr={categories} />
    </div>
  );
}

export default Aside;
