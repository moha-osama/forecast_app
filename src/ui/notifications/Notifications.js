import classes from "./Notifications.module.css";

const Notifications = (props) => {
  return (
    <section className={classes.notification}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notifications;
