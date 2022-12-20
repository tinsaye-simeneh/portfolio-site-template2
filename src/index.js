import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="pb-4 bg-black pt-1 text-center">
        <BrowserRouter>
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Resume" element={<Resume />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <div className="text-white bg-orange pt-1">
          Designed and Developed by
          <a
            href="https://github.com/tinsaye-simeneh"
            alt="Tinsaye's Github link"
            className="text-center ps-2 text-white"
          >
            Tinsaye Simeneh
          </a>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
