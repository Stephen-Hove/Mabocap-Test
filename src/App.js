import "./App.css";
import PageTitleUpdater from "./Pages/PageTitleUpdater";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Team from "./Pages/Team";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Careers from "./Pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <PageTitleUpdater /> {/* Include the PageTitleUpdater component */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Team />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
