import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Home } from "./components/Home";
import { Messenger } from "./components/Messenger";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Messenger />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
