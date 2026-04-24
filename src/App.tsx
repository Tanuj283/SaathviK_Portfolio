import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] font-sans">
        <Navbar />
        <main className="max-w-7xl mx-auto pt-32 px-8 pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          
          <footer className="mt-20 border-t border-gray-800 pt-8 flex justify-between items-center text-gray-600">
            <p className="text-[9px] uppercase tracking-[0.2em]">© 2026 Saathvik Maddhireddy — All Rights Reserved</p>
            <p className="text-[9px] uppercase tracking-[0.2em]">Portfolio / V1.0</p>
          </footer>
        </main>
      </div>
    </Router>
  );
}

