import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navigation } from "Components/Navigation";
import { Home } from "Pages/Home";

import { Module1, Module2 } from "app2/modules";
import { useEffect, useState } from "react";
import "./Styles/tailwind.css";

const App = () => {
  const [accessToken, setAccessToken] = useState<number>(0);

  // Simulate an access token changing every ten seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAccessToken((prev) => prev + 1);
    }, 10_000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navigation accessToken={accessToken} />
      <Router>
        <Routes>
          <Route
            path="/module1"
            element={<Module1 accessToken={accessToken} />}
          />
          <Route
            path="/module2"
            element={<Module2 accessToken={accessToken} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
