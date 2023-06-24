import React from "react";
import "./Styles/style.scss";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./components/upload/Upload";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Upload />
      </Router>
    </>
  );
};

export default App;
