import classes from "./NewsInfo.module.css";
import SecHeader from "../../ui/sec-header/SecHeader";
import Button from "../../ui/Button/Button";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function NewsInfo({ newData }) {
  const { page } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const path = useParams();
  return (
    <>
      <div className={classes.header}>
        <SecHeader to={`News → ${path.newId}`} />
      </div>
      <section className={classes["detail-page"]}>
        <div className={classes.info}>
          <div className={classes.btn}>
            <NavLink to="/news">
              <Button type="Back" />
            </NavLink>
          </div>
          <div className={classes["img-box"]}>
            <img src={newData.image} alt="img" />
          </div>
          <h1>{newData.title}</h1>
          <p>{newData.info}</p>
        </div>
      </section>
    </>
  );
}
export default NewsInfo;
