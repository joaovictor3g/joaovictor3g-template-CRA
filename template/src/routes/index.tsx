import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./myRoutes";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
