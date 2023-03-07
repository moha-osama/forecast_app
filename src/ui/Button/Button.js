import classes from "./Button.module.css";

function Button(props) {
  return (
    <div className={classes["search-button"]}>
      <button onClick={props.onClick} disabled={props.disabled} {...props}>
        {props.type}
      </button>
    </div>
  );
}

export default Button;
