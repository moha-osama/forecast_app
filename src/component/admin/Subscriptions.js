import classes from "./Subscriptions.module.css";

const Subscriptions = ({ data }) => {
  let loadSubs = [];
  for (const key in data) {
    loadSubs.push({ id: key, email: data[key].email });
  }
  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <h1>Subscriptions</h1>
      </div>
      {loadSubs.length !== 0 ? (
        <nav>
          <ul>
            {loadSubs.map((item) => (
              <>
                <li key={item.id}>{item.email}</li>
                <hr />
              </>
            ))}
          </ul>
        </nav>
      ) : (
        <p>No Subscriptions Yet</p>
      )}
    </div>
  );
};

export default Subscriptions;
