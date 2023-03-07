import "./index.css";

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";

import ErrorPage from "./pages/Error";
import HomePage, { loader as weatherLoader } from "./pages/HomePage";

import LiveCamerasPage, {
  loader as citiesLoader,
} from "./pages/LiveCameraPage";

import ContactPage, { loader as mapLoader } from "./pages/ContactPage";

import NewsDetailsPage, {
  loader as newDetailsLoader,
} from "./pages/NewsDetailsPage";

import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import MessagesPage, { loader as messagesLoader } from "./pages/MessagesPage";
import SubscriptionsPage, {
  loader as subscriptionsLoader,
} from "./pages/SubscriptionsPage";

import { action as formAction } from "./component/contact/Form";
import { action as subscribeAction } from "./ui/input-field/InputField";

const NewsPage = lazy(() => import("./pages/NewsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    action: subscribeAction,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: weatherLoader,
      },
      {
        path: "news",
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <NewsPage />
              </Suspense>
            ),
            loader: () =>
              import("./pages/NewsPage").then((module) => module.loader()),
          },
          {
            path: ":newId",
            id: "new-detail",
            loader: newDetailsLoader,
            element: <NewsDetailsPage />,
          },
        ],
      },
      {
        path: "live-cameras",
        element: <LiveCamerasPage />,
        loader: citiesLoader,
      },
      {
        path: "contact",
        element: <ContactPage />,
        loader: mapLoader,
        action: formAction,
      },
      { path: "login", element: <LoginPage /> },
      {
        path: "admin",
        element: <AdminPage />,
        children: [
          {
            path: "messages",
            element: <MessagesPage />,
            loader: messagesLoader,
          },
          {
            path: "subscriptions",
            element: <SubscriptionsPage />,
            loader: subscriptionsLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
