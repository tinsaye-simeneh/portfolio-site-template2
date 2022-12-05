import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/pages/Main";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="pb-5 bg-black pt-1">
        <Main />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
