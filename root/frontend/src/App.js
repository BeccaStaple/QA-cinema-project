import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from 'react-router-dom';

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPage from "./components/Footer";
import Quickbook from "./components/quickbook"

function App() {
  return (
    <div class="page-body">
      <Router>
      <Header />
      <NavBar />
      <FooterPage />
      </Router>
    </div>
  );
}

export default App;
