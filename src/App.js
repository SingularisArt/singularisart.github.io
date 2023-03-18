import React from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";
import LatestsPosts from "./components/LatestPosts/LatestPosts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Socials />
      <LatestsPosts />
      <Footer />
    </div>
  );
}

export default App;
