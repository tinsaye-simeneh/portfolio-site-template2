import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/pages/Main";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Resume />
      <div
        className="bg-black text-center pb-1 text-decoration-underline text-orange"
        style={{ fontSize: "2rem" }}
      >
        RJ
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
