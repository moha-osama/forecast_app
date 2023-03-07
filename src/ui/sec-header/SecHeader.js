import classes from "./SecHeader.module.css";
// import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function SecHeader(props) {
  // const path = props.to.split(" ")[0].toLowerCase();

  return (
    <div className={classes.header}>
      <NavLink to="/">
        <p>Home &rarr; </p>
      </NavLink>
      <span>{props.to}</span>
    </div>
  );
}

export default SecHeader;
