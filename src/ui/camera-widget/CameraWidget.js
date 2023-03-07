import classes from "./CameraWidget.module.css";

function CameraWidget(props) {
  return (
    <div className={classes.widget} onClick={props.onClick}>
      <div className={classes["img-box"]}>
        <img src={props.image} alt="iamge" />
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
        </svg>
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default CameraWidget;
