import classes from "./Form.module.css";

import { Form, json, redirect } from "react-router-dom";

import Button from "../../ui/Button/Button";

function ContactForm({ method }) {
  return (
    <div className={classes.area}>
      <div>
        <h1>Contact us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          consectetur inventore ducimus, facilis, numquam id soluta omnis eius
          recusandae nesciunt vero repellat harum cum. Nisi facilis odit hic,
          ipsum sed!
        </p>
      </div>
      <Form method={method} className={classes.form}>
        <input
          placeholder="Your name"
          id="name"
          type="text"
          name="name"
          required
        />
        <input
          placeholder="Email Address"
          id="email"
          type="email"
          name="email"
          required
        />
        <input
          placeholder="Company name"
          id="cname"
          type="text"
          name="cname"
          required
        />
        <input
          placeholder="Website"
          id="website"
          type="text"
          name="website"
          required
        />
        <div className={classes["text-area"]}>
          <textarea
            placeholder="Message"
            id="message"
            type="text"
            name="message"
            maxLength="250"
            required
          />
          <div className={classes.btn}>
            <Button type="Submit" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;

export async function action({ request }) {
  const method = request.method;
  const data = await request.formData();

  const contactData = {
    title: data.get("name"),
    email: data.get("email"),
    companyName: data.get("cname"),
    website: data.get("website"),
    message: data.get("message"),
  };

  let url = "${firebase_db}/messages.json";

  const options = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  };

  const response = await fetch(url, options);

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not save event." });
  }
  alert("Thank you for contacting us.");
  return redirect("/");
}
