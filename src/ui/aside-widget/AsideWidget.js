import classes from "./AsideWidget.module.css";

function AsideWidget(props) {
  const text = props.arr;

  return (
    <div className={classes.widget}>
      <div className={classes.body}>
        <h3>{props.title}</h3>
        <nav>
          <ul>
            {text.map((item) => (
              <li key={Math.random()}>
                <span>&rarr;</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AsideWidget;
