import React from "react";
import "./App.css";
import Header from "./PageComponents/Header";
import HomepageCarousel from "./PageComponents/HomepageCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./PageComponents/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <NavBar/>
      <HomepageCarousel />
    </div>
  );
}

export default App;
