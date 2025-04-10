import Admin from "./pages/Admin.jsx";
import ProfessionalOverview from "./pages/adminViews/ProfessionalOverview.jsx";
import UpcomingMeetings from "./pages/adminViews/UpcomingMeetings.jsx";
import ClientMetrics from "./pages/adminViews/ClientMetrics.jsx";
import Client from "./pages/Client.jsx";
import Landing from "./pages/Landing.jsx";
import SelectUser from "./pages/SelectUser.jsx";
import LoginPage from "./pages/Login.jsx";

const routes = [
  { path: "/", element: <Landing /> },
  // Login
  { path: "/login", element: <LoginPage /> }, // TODO: Implement authentication.
  { path: "/select-user", element: <SelectUser /> },
  // Admin Role
  { path: "/admin", element: <Admin /> },
  // Admin Role Views
  { path: "/admin/upcoming-meetings", element: <UpcomingMeetings /> },
  { path: "/admin/client-metrics", element: <ClientMetrics /> },
  { path: "/admin/professional-overview", element: <ProfessionalOverview /> },
  // Client Role
  { path: "/client", element: <Client /> },
  // Client Role Views
];

export default routes;
