import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navigation } from "Components/Navigation";
import { Home } from "Pages/Home";

import "./Styles/tailwind.css";

const App = () => (
  <>
    <Navigation />
    <Router>
      <Routes>
        <Route path="/module1" element={<p>TODO: connect to module 1</p>} />
        <Route path="/module2" element={<p>TODO: connect to module 2</p>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>
);

export default App;
