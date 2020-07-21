import React from "react";
import "./App.css";
import Header from "./PageComponents/Header";
import HomepageCarousel from "./components/HomepageCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./PageComponents/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPage from "./components/Footer";
import Quickbook from "./PageComponents/quickbook"

function App() {
  return (
    <div class="page-body">
      <Header />
      <NavBar />
      <Quickbook/>
      <HomepageCarousel />
      <FooterPage />
    </div>
  );
}

export default App;
