import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import About from "./page/About";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Followers from "./page/users/Followers";
import User from "./page/users/User";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent /> // <Home /> 에러시 나타나는 요소
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorComponent /> // <About /> 에러시 나타나는 요소
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      }
    ],
    errorElement: <NotFound /> // "/" 페이지 에러시 나타나는 요소
  },
]);

export default router;