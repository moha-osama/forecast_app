import classes from "./FilterBar.module.css";
import DropList from "./DropList";

function FilterBar() {
  return (
    <div className={classes.filter}>
      <div className={classes.body}>
        <div className={classes.item}>
          <p>Country</p>
          <DropList options={["All Countries"]} />
        </div>
        <div className={classes.item}>
          <p>Show per page</p>
          <DropList options={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        </div>
        <div className={classes.item}>
          <p>Only high quality</p>
          <DropList options={["Yes", "No"]} />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
