import { useRouteError } from "react-router-dom";

import MainNavigation from "../component/MainNav/MainNavigation";
import Footer from "../component/footer/Footer";

import Error from "../component/error/Error";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  if (error.status === 200) {
    title = "Not Allowed!";
    message = "login and try again";
  }

  return (
    <>
      <MainNavigation />
      <Error title={title} message={message} />
      <Footer />
    </>
  );
}

export default ErrorPage;
