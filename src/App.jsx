import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AnnonceLogement from "./pages/Annonce/AnnonceLogement";
import Error from "./pages/Error/Error";

function App() {
  console.log("App component loaded");
  return (
    <Router basename="/kasa">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/annonce/:id" element={<AnnonceLogement />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
