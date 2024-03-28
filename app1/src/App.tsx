import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navigation } from "Components/Navigation";
import { Home } from "Pages/Home";

import { Module1, Module2 } from "app2/modules";
import "./Styles/tailwind.css";

const App = () => (
  <>
    <Navigation />
    <Router>
      <Routes>
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>
);

export default App;
