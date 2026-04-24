import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-gray-800 z-50 px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-black text-2xl tracking-tighter uppercase"
        >
          SM<span className="text-gray-600">.</span>
        </motion.div>
        
        <div className="flex gap-10">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `caption transition-colors hover:text-white ${
                isActive ? "text-white" : "text-gray-500"
              }`
            }
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `caption transition-colors hover:text-white ${
                isActive ? "text-white" : "text-gray-500"
              }`
            }
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
