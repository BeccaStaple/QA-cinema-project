import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomepageCarousel from "./components/HomepageCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <HomepageCarousel />
    </div>
  );
}

export default App;
