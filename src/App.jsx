import { BrowserRouter, Route, Routes } from "react-router";
import routes from "./routes.jsx";
import { ClickMeetProvider } from "./context/ClickMeetContext";

const App = () => {
  return (
    <ClickMeetProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </ClickMeetProvider>
  );
};

export default App;
