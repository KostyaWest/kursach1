import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigationbar from "./components/navigationbar/Navigationbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./components/utils/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

            <Route path="/project/:id" element={<Project />} />
            
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;