import Admin from "./pages/Admin.jsx";
import Client from "./pages/Client.jsx";
import Landing from "./pages/Landing.jsx";
import SelectUser from "./pages/SelectUser.jsx";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/select-user", element: <SelectUser /> },
  { path: "/admin", element: <Admin /> },
  { path: "/client", element: <Client /> },
];

export default routes;
