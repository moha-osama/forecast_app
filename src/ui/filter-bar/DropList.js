import classes from "./DropList.module.css";
import { useState } from "react";

function DropList(props) {
  const [value, setValue] = useState(1);
  const selectHandeler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={classes.droplist}>
      <select onChange={selectHandeler}>
        {props.options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropList;
