import classes from "./Contact.module.css";
import ContactForm from "./Form";
import SecHeader from "../../ui/sec-header/SecHeader";
import MapCard from "./MapCard";

function Contact({ data, method, actionData }) {
  return (
    <>
      <div className={classes.header}>
        <SecHeader to="Contact" />
      </div>
      <div className={classes.contact}>
        <aside className={classes.aside}>
          <MapCard data={data} />
        </aside>
        <main className={classes.main}>
          <ContactForm method={method} actionData={actionData} />
        </main>
      </div>
    </>
  );
}

export default Contact;
