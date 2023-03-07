import classes from "./InputField.module.css";
import { Form, json, redirect } from "react-router-dom";

function InputField(props) {
  const formSubmissionHandler = () => {};

  return (
    <Form
      onSubmit={formSubmissionHandler}
      method="post"
      className={classes.input}
    >
      <input
        placeholder={props.placeholder}
        id="email"
        type="email"
        name="email"
        required
      />
      <div className={classes["search-button"]}>
        <button type="submit">{props.type}</button>
      </div>
    </Form>
  );
}

export default InputField;

export async function action({ request }) {
  const data = await request.formData();
  const method = request.method;

  const contactData = {
    email: data.get("email"),
  };

  let url =
    "https://weather-forecast-f0672-default-rtdb.firebaseio.com/subscriptions.json";

  const options = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw json();
  } else {
    alert("Success!");
    return redirect("/contact");
  }
}
