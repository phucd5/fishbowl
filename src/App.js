import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import VideoPlayer from "./pages/VideoPlayer";
import About from "./pages/About";
import { useEffect, useState } from "react";

function App() {
  let navLinks;
  switch (window.location.pathname) {
    case "/":
      navLinks = <Home />;
      break;
    case "/home":
      navLinks = <Home />;
      break;
    case "/upload":
      navLinks = <Upload />;
      break;
    case "/videos":
      navLinks = <VideoPlayer />;
      break;
    case "/signup":
      navLinks = <SignUp />;
      break;
    case "/about":
      navLinks = <About />;
      break;
  }
  return (
    <div>
      <Navbar />
      <div className=".nav-container">{navLinks}</div>
    </div>
  );
}

export default App;
