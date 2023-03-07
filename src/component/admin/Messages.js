import classes from "./Messages.module.css";

const Messages = ({ data }) => {
  //
  let loadMessages = [];
  for (const key in data) {
    loadMessages.push({
      id: key,
      companyName: data[key].companyName,
      email: data[key].email,
      message: data[key].message,
      title: data[key].title,
      website: data[key].website,
    });
  }
  console.log(loadMessages);
  //
  return (
    <section className={classes["message-page"]}>
      <div className={classes.header}>
        <h1>Messages</h1>
      </div>
      {loadMessages.length !== 0 ? (
        <nav>
          <ul>
            {loadMessages.map((item) => (
              <li key={item.id}>
                <div className={classes["message-card"]}>
                  <div className={classes["card-header"]}>
                    <h1>{item.title}</h1>
                    <p>{item.email}</p>
                    <span>{item.website}</span>
                  </div>
                  <hr></hr>
                  <div className={classes["card-body"]}>
                    <h2>{item.companyName}</h2>
                    <h4>{item.message}</h4>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <p className={classes.msg}>No messages Found</p>
      )}
    </section>
  );
};

export default Messages;
