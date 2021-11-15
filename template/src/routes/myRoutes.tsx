// add all your routes here
import { Home } from "../pages/Home";

export const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
    key: "home",
  },
];
