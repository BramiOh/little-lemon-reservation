import { createBrowserRouter } from "react-router-dom";
import Reservation from "../views/Reservation";
import Home from "./../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
]);

export default router;
