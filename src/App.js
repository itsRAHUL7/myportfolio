import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Automatically ping the server to wake it up/connect
    fetch("/api/health")
      .then(res => res.json())
      .then(data => console.log("Backend Connected:", data.message))
      .catch(err => console.error("Backend Connection Error:", err));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}


export default App;
