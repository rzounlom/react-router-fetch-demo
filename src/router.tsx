import FetchExample1 from "./pages/FetchExample1";
import FetchExample2 from "./pages/FetchExample2";
import FetchExamples from "./pages/FetchExamples";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserPage from "./pages/UserPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "fetch-examples",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <FetchExamples />,
      },
      {
        path: "example1",
        element: <FetchExample1 />,
      },
      {
        path: "example2",
        element: <FetchExample2 />,
      },
    ],
  },
  {
    path: "user/:id",
    element: <UserPage />,
  },
]);
